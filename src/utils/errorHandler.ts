import type { FastifyError, FastifyRequest, FastifyReply } from "fastify";

export const errorHandler = (error: FastifyError, _req: FastifyRequest, reply: FastifyReply) => {
	return reply.send({
		code: 0,
		message: "Internal Server Error",
		stack: process.env.APP_ENV === "production" ? undefined : error.stack ?? error.message,
	});
};
