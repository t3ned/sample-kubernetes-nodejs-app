import "dotenv/config";

process.on("uncaughtException", (error) => {
	console.error(error);
});

process.on("unhandledRejection", (error) => {
	console.error(error);
});

process.on("SIGINT", () => {
	console.warn("Received SIGINT signal, exiting...");
	process.exit(0);
});
