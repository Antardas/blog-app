import { Express, Request } from 'express';
import type { ReqUser } from '../src/types/user';

declare global {
	namespace Express {
		interface Request {
			user?: ReqUser;
		}
	}
}
