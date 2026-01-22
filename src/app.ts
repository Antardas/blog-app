import express from 'express';
import type { Express } from 'express';
import { toNodeHandler } from 'better-auth/node';
import { auth } from './lib/auth';

const app: Express = express();

app.use(express.json());

app.all('/api/auth/{*splat}', toNodeHandler(auth));

export default app;
