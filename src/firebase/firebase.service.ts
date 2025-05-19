import { Injectable, OnModuleInit } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import * as admin from 'firebase-admin';
const config = new ConfigService();

@Injectable()
export class FirebaseService implements OnModuleInit {
  onModuleInit() {
    const serviceAccount = config.get('FIREBASE_CONFIG');

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
      console.error('❌ Error sending notification:', err);
      throw err;
    }
  }
}
