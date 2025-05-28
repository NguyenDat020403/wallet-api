import { Injectable } from '@nestjs/common';
import * as crypto from 'crypto';

@Injectable()
export class BiometricService {
  verifySignature(
    publicKeyBase64: string,
    payload: string,
    signatureBase64: string,
  ): boolean {
    try {
      const pemPublicKey = this.formatToPem(publicKeyBase64);
      const isValid = crypto.verify(
        'sha256',
        Buffer.from(payload, 'utf-8'),
        {
          key: pemPublicKey,
          padding: crypto.constants.RSA_PKCS1_PADDING,
        },
        Buffer.from(signatureBase64, 'base64'),
      );

      return isValid;
    } catch (error) {
      console.error('Error verifying signature:', error);
      return false;
    }
  }

  private formatToPem(base64Key: string): string {
    const formatted = base64Key.match(/.{1,64}/g)?.join('\n');
    return `-----BEGIN PUBLIC KEY-----\n${formatted}\n-----END PUBLIC KEY-----`;
  }
}
