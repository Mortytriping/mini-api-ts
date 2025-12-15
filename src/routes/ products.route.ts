import type { FastifyInstance } from 'fastify'
import { Product, products_array } from '../types/product'

export function handleRouteProducts(app: FastifyInstance) {

	// GET ------------------------------------------------------------------------------
		
		app.get('/products', async (req, reply) => {return products_array})
}

