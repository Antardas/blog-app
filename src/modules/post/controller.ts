import type { Request, Response, NextFunction } from 'express';
import type { ReqUser } from '../../types/user';
import { postService } from './service';
const createPost = async (req: Request, res: Response, next: NextFunction) => {
	try {
		const user = req.user as ReqUser;
		const result = await postService.createPost(req.body, user.id);
		res.status(201).json({
			success: true,
			data: result,
		});
	} catch (error) {
		if (error instanceof Error) {
			return res.status(500).json({
				success: true,
				message: error.message,
			});
		}
		console.error(error);

		res.status(500).json({
			success: true,
			message: 'Internal server error',
		});
	}
};
const getPosts = (req: Request, res: Response, next: NextFunction) => {};
const updatePost = (req: Request, res: Response, next: NextFunction) => {};
const deletePost = (req: Request, res: Response, next: NextFunction) => {};

export const postController = {
	createPost,
	getPosts,
	updatePost,
	deletePost,
};
