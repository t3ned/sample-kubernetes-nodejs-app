import type { FastifyPluginCallback } from "fastify";

const users: FastifyPluginCallback = (app, _, done) => {
	app.get("/users", () => {
		return { hello: "world" };
	});

	done();
};

export default users;
