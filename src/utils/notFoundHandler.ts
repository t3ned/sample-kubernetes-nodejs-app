import type { FastifyRequest, FastifyReply } from "fastify";

export const notFoundHandler = async (_req: FastifyRequest, reply: FastifyReply) => {
	return reply.send({
		code: 0,
		message: "Route not found",
	});
};
