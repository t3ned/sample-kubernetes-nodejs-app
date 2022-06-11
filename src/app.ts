import fastify from "fastify";
import "./index";

import users from "./routes/v1/users";

const app = fastify({
	logger: true,
	caseSensitive: false,
});

const host = process.env.APP_HOST ?? "localhost";
const port = Number(process.env.APP_PORT) || 4444;

app.register(users);

const startApp = async () => {
	await app.listen({ host, port });
};

startApp().catch((error) => {
	app.log.error(error);
	process.exit(1);
});
