import dotenv from 'dotenv';
dotenv.config();
export const config = {
	port: process.env.PORT ? parseInt(process.env.PORT) : 3000,
	databaseUrl: process.env.DATABASE_URL,
	appUrl: process.env.APP_URL || 'http://localhost:3000',
	smtpUser: process.env.SMTP_USER,
	smtpPassword: process.env.SMTP_PASSWORD,
	smtpHost: process.env.SMTP_HOST || 'smtp.freesmtpservers.com',
	smtpPort: process.env.SMTP_PORT ? parseInt(process.env.SMTP_PORT) : 25,
};
