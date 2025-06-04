/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import { Injectable } from '@nestjs/common';
import { google } from 'googleapis';
import * as fs from 'fs';
import * as path from 'path';
import * as crypto from 'crypto';

@Injectable()
export class GoogleDriveService {
  private drive;

  constructor() {
    const auth = new google.auth.GoogleAuth({
      keyFile: 'src/config/credentials.json',
      scopes: ['https://www.googleapis.com/auth/drive.file'],
    });

    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    this.drive = google.drive({ version: 'v3', auth });
  }

  // Mã hóa mnemonic
  encryptMnemonic(mnemonic: string, secret: string): Buffer {
    const key = crypto.createHash('sha256').update(secret).digest(); // 256-bit key
    const cipher = crypto.createCipheriv('aes-256-ecb', key, null);
    const encrypted = Buffer.concat([
      cipher.update(mnemonic, 'utf8'),
      cipher.final(),
    ]);
    return encrypted;
  }
  decryptMnemonic(encrypted: Buffer, secret: string): string {
    const key = crypto.createHash('sha256').update(secret).digest();
    const decipher = crypto.createDecipheriv('aes-256-ecb', key, null);
    const decrypted = Buffer.concat([
      decipher.update(encrypted),
      decipher.final(),
    ]);
    return decrypted.toString('utf8');
  }
  async uploadEncryptedMnemonic(
    userId: string,
    mnemonic: string,
    secret: string,
  ): Promise<string> {
    const encrypted = this.encryptMnemonic(mnemonic, secret);
    const filename = `mnemonic_${userId}.enc`;
    const filepath = path.join(__dirname, filename);

    fs.writeFileSync(filepath, encrypted);

    const res = await this.drive.files.create({
      requestBody: {
        name: filename,
        mimeType: 'application/octet-stream',
      },
      media: {
        mimeType: 'application/octet-stream',
        body: fs.createReadStream(filepath),
      },
    });

    fs.unlinkSync(filepath);

    const fileId = res.data.id;
    await this.drive.permissions.create({
      fileId,
      requestBody: {
        role: 'reader',
        type: 'anyone',
      },
    });
    return `https://drive.google.com/file/d/${fileId}/view`;
  }
  async downloadFile(fileId: string): Promise<Buffer> {
    const auth = new google.auth.GoogleAuth({
      keyFile: 'src/config/credentials.json',
      scopes: ['https://www.googleapis.com/auth/drive.readonly'],
    });

    const drive = google.drive({ version: 'v3', auth });

    const res = await drive.files.get(
      { fileId, alt: 'media' },
      { responseType: 'stream' },
    );

    return new Promise<Buffer>((resolve, reject) => {
      const data: Uint8Array[] = [];
      res.data.on('data', (chunk) => data.push(chunk));
      res.data.on('end', () => resolve(Buffer.concat(data)));
      res.data.on('error', reject);
    });
  }
}
