import type { FastifyPluginCallback } from "fastify";
import { LivenessController } from "../../controllers/LivenessController";

const users: FastifyPluginCallback = (app, _, done) => {
	app.get("/status", LivenessController.getStatus);

	done();
};

export default users;
