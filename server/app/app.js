import express from "express";
import * as dotenv from "dotenv";

const dotenvResult = dotenv.config()

if (dotenvResult.error) {
	console.error(`Failed to load .env file: ${dotenvResult.error}`);
	process.exit(1);
}

const PORT = process.env.EXPRESS_PORT || 5050;
const app = express();

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
