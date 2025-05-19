import { Injectable, OnModuleInit } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import * as admin from 'firebase-admin';
import path from 'path';
const config = new ConfigService();

@Injectable()
export class FirebaseService implements OnModuleInit {
  onModuleInit() {
    const firebaseCredPath =
      config.get<string>('FIREBASE_CREDENTIALS_PATH') ||
      'src/config/firebase-adminsdk.json';
    const serviceAccount = require(path.resolve(firebaseCredPath));

    if (!admin.apps.length) {
      admin.initializeApp({
        credential: admin.credential.cert(
          serviceAccount as admin.ServiceAccount,
        ),
      });
    }
  }

  async sendNotification(
    token: string,
    notification: { title: string; body: string },
  ) {
    const message: admin.messaging.Message = {
      data: {
        navigationId: 'HomeScreen',
      },
      notification: notification,
      token,
      android: {
        priority: 'high', // OK vì đã đúng kiểu
      },
      apns: {
        headers: {
          'apns-priority': '10',
        },
      },
    };
    try {
      const res = await admin.messaging().send(message);
      console.log('Success:', res);
      return res;
    } catch (err) {
      console.error('❌ Error sending notification:', err.code, err.message);

      // Nếu token không hợp lệ
      if (err.code === 'messaging/registration-token-not-registered') {
        // Option: gọi prisma để xóa token tương ứng trong bảng users
        console.warn('⚠️ Token is not registered. Should remove from DB.');
      }

      throw err;
    }
  }
}
