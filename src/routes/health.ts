import { FastifyPluginAsync } from 'fastify'

const healthRoute: FastifyPluginAsync = async (fastify) => {
    fastify.get('/', {
        schema: {
            description: 'Health check',
            tags: ['health']
        }
    }, async () => {
        return { status: 'ok' }
    })
}

export default healthRoute
