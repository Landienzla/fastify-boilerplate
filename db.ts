import mongoose from 'mongoose'
import pino from 'pino'
import { env } from './src/config'

const connectDB = async (): Promise<void> => {
    const mongoUri = env.MONGO_URI

    if (!mongoUri) {
        throw new Error('MONGO_URI is not defined in environment variables.')
    }

    try {
        await mongoose.connect(mongoUri, {
            dbName: env.MONGO_DB_NAME || 'fastify-boilerplate',
        })
        pino({
            transport: {
                target: 'pino-pretty',
                options: {
                    colorize: true,
                }
            }
        }).info('🟢 MongoDB connected')
    } catch (err) {
        pino({
            transport: {
                target: 'pino-pretty',
                options: {
                    colorize: true,
                }
            }
        }).error('🔴 MongoDB connection error:', err)
        process.exit(1)
    }
}

export default connectDB
