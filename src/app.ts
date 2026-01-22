import express from 'express';
import type { Express } from 'express';
import { toNodeHandler } from 'better-auth/node';
import cors from 'cors';
import { auth } from './lib/auth';
import postRouter from './modules/post/router';
import { config } from './config';
const app: Express = express();
app.use(
	cors({
		origin: [config.appUrl],
		credentials: true,
	}),
);
app.use(express.json());

app.all('/api/auth/{*splat}', toNodeHandler(auth));

app.use('/api/posts', postRouter);

export default app;
