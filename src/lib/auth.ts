import { betterAuth } from 'better-auth';
import { prismaAdapter } from 'better-auth/adapters/prisma';
import { prisma } from './prisma';
import { config } from '../config';
import { transporter } from './mail';

export const auth = betterAuth({
	database: prismaAdapter(prisma, {
		provider: 'postgresql',
	}),
	emailAndPassword: {
		enabled: true,
		autoSignIn: false,
		requireEmailVerification: true,
	},
	trustedOrigins: [config.appUrl],
	user: {
		additionalFields: {
			role: {
				type: 'string',
				required: false,
				default: 'USER',
			},
			phone: {
				type: 'string',
				required: false,
			},
			status: {
				type: 'string',
				required: false,
				default: 'ACTIVE',
			},
		},
	},

	emailVerification: {
		sendOnSignUp: true,
		autoSignInAfterVerification: true,
		sendVerificationEmail: async ({ user, url, token }) => {
			// TODO: Implement email sending logic
			await transporter.sendMail({
				from: config.smtpUser,
				to: user.email,
				subject: 'Verify your email',
				html: `<p>Click <a href="${url}">here</a> to verify your email</p>`,
			});
			return;
		},
	},
});

export enum UserRole {
	USER = 'USER',
	ADMIN = 'ADMIN',
}
