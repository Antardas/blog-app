import nodemailer from 'nodemailer';
import { config } from '../config';

export const transporter = nodemailer.createTransport({
	host: config.smtpHost,
	port: config.smtpPort,
	secure: false,
	auth: {
		user: config.smtpUser,
		pass: config.smtpPassword,
	},
});
