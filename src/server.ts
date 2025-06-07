import Fastify from 'fastify'
import cors from '@fastify/cors'
import helmet from '@fastify/helmet'
import rateLimit from '@fastify/rate-limit'
import swagger from '@fastify/swagger'
import swaggerUi from '@fastify/swagger-ui'
import metrics from 'fastify-metrics'
import connectDB from '../db'
import { env, rateLimitOptions } from './config'

// Connect to MongoDB
connectDB()

const app = Fastify({
    logger: {
        transport: {
            target: 'pino-pretty',
            options: {
                colorize: true,
                translateTime: 'HH:MM:ss Z',
                ignore: 'pid,hostname',
                singleLine: false,
                messageFormat: '{msg}'
            }
        },
        level: 'info'
    }
})


// Register core plugins
app.register(cors)
app.register(helmet)
app.register(rateLimit, {
    ...rateLimitOptions
})

app.register(metrics, {
    endpoint: '/metrics'
})

app.register(swagger, {
    swagger: {
        info: {
            title: 'Fastify Boilerplate',
            description: 'API documentation with Swagger UI',
            version: '1.0.0'
        },
        externalDocs: {
            url: 'https://github.com/landienzla/fastify-boilerplate',
            description: 'Find more info here'
        },
        tags: [
        ],
        consumes: ['application/json'],
        produces: ['application/json']
    }
})
app.register(swaggerUi, {
    routePrefix: '/docs',
    uiConfig: {
        docExpansion: 'full',
        deepLinking: false
    },
    staticCSP: true,
    transformStaticCSP: (header) => header,
})


// Register routes
import healthRoute from './routes/health'
app.register(healthRoute, { prefix: '/health' })


// Start the server
const start = async () => {
    try {
        await app.listen({ port: Number(env.PORT) || 3000, host: '0.0.0.0' })
    } catch (err) {
        app.log.error(err)
        process.exit(1)
    }
}

start()
