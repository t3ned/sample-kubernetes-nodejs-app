export class LivenessController {
	public static getStatus() {
		return {
			NAME: process.env.APP_NAME,
			ENV: process.env.APP_ENV,
		};
	}
}
