import * as admin from "firebase-admin";
import { env } from ".";
import pino from "pino";

// Initialize Firebase Admin
if (!admin.apps.length) {
    try {
        admin.initializeApp({
            credential: admin.credential.cert(JSON.parse(env.FIREBASE_SERVICE_ACCOUNT)),
            storageBucket: env.FIREBASE_STORAGE_BUCKET
        });
        pino({
            transport: {
                target: 'pino-pretty',
                options: {
                    colorize: true,
                }
            }
        }).info('🟢 Firebase Admin initialized successfully')
    } catch (error) {
        pino({
            transport: {
                target: 'pino-pretty',
                options: {
                    colorize: true,
                }
            }
        }).error("Error initializing Firebase Admin:", error);
    }
}

export { admin };