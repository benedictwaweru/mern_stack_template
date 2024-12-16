import { MongoClient, ServerApiVersion } from "mongodb";
import * as dotenv from "dotenv";

const dotenvResult = dotenv.config();

if (dotenvResult.error) {
	console.error(`Failed to load .env file: ${dotenvResult.error}`);
	process.exit(1);
}

const mongodbURI = process.env.MONGODB_URI ?? (() => console.error(`MONGODB_URI is undefined. Check your .env file.`))();

const mongoClient = new MongoClient(
	mongodbURI,
	{
		serverApi: {
			version: ServerApiVersion.v1,
			strict: true,
			deprecationErrors: true
		}
	}
);

async function mongoDBRun() {
	try {
		await mongoClient.connect();
		await mongoClient.db(process.env.MONGODB_NAME).command({ ping: 1 });
	} catch {
		console.error(`Database connection failed`);
	} finally {
		await mongoClient.close();
	}
}

mongoDBRun();