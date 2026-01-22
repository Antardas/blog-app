import type { NextFunction, Request, Response } from 'express';
import type { UserRole } from '../types/user';
import { auth as betterAuth } from '../lib/auth';

const auth = (...roles: UserRole[]) => {
	return async (req: Request, res: Response, next: NextFunction) => {
		try {
			const session = await betterAuth.api.getSession({
				headers: req.headers as any,
			});

			if (!session) {
				return res.status(401).json({
					success: false,
					message: "Your'e not authorized",
				});
			}

			if (!session.user.emailVerified) {
				return res.status(401).json({
					success: false,
					message: 'Email verification required. Please verify your email!',
				});
			}

			req.user = {
				id: session.user.id,
				email: session.user.email,
				name: session.user.name,
				role: session.user.role as UserRole,
				emailVerified: session.user.emailVerified,
			};

			if (roles.length && !roles.includes(req.user.role as UserRole)) {
				return res.status(403).json({
					success: false,
					message: "You don't have permission to access this resource",
				});
			}

			next();
		} catch (err) {
			next(err); // request passed to error middleware
		}
	};
};

export default auth;
