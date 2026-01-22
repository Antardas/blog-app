import app from './app';
import { prisma } from './lib/prisma';

const main = async () => {
	try {
		await prisma.$connect();
		app.listen(3000, () => {
			console.log('Server is running on port 3000');
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
