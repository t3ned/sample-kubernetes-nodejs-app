import fastify from "fastify";
import "./index";

import liveness from "./routes/v1/liveness";

const app = fastify({
	logger: true,
	caseSensitive: false,
});

const host = process.env.APP_HOST ?? "localhost";
const port = Number(process.env.APP_PORT) || 4444;

app.register(liveness, { prefix: "/api/v1/liveness" });

const startApp = async () => {
	await app.listen({ host, port });
};

startApp().catch((error) => {
	app.log.error(error);
	process.exit(1);
});
