import dotenv from 'dotenv'
import { z } from 'zod'

dotenv.config()

const envSchema = z.object({
    NODE_ENV: z.enum(['development', 'production']).default('development'),
    PORT: z.string().default('3000'),
    MONGO_URI: z.string().url(),
    MONGO_DB_NAME: z.string().default('fastify-boilerplate'),
    JWT_SECRET: z.string(),
    FIREBASE_SERVICE_ACCOUNT: z.string(),
    FIREBASE_STORAGE_BUCKET: z.string(),
})

export const env = envSchema.parse(process.env)
export const rateLimitOptions = {
    global: true,
    max: 100,
    timeWindow: '1 minute',
    allowList: ['127.0.0.1'],
    cache: 5000,
}
export const jwtOptions = {
    secret: env.JWT_SECRET,
    sign: {
        expiresIn: '7d',
    },
    verify: {
        algorithms: ['HS256'] as const,
    },
}
