import Fastify from 'fastify'
import { handleRouteProducts } from './routes/ products.route'

export const fastify = Fastify({
	logger: true
})

handleRouteProducts(fastify);

fastify.get('/', async (request, reply) => {
	return { hello: 'world' };
})

const start = async () => {
	try {
		await fastify.listen({port: 3000, host: 'localhost'})
		fastify.log.info("server lancer sur localhost:3000")
	} catch (err) {
		fastify.log.error(err + "BUG ERROR")
		process.exit(1)
	}				
}

start()