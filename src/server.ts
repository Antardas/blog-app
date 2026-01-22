import app from './app';
import { config } from './config';
import { prisma } from './lib/prisma';

const main = async () => {
	try {
		await prisma.$connect();
		app.listen(config.port, () => {
			console.log('Server is running on port: ', config.port);
		});
		
	} catch (error) {
		if (error instanceof Error) {
			console.error(`A error occurred: ${error.message}`);
		} else {
			console.error(`A error occurred: ${error}`);
			process.exit(1);
		}
	}
};

main();
