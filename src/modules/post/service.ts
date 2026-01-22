import type { PostCreateInput } from '../../generated/prisma/models';
import { prisma } from '../../lib/prisma';

const createPost = async (
	data: Omit<PostCreateInput, 'id' | 'createdAt' | 'updatedAt' | 'authorId'>,
	userId: string,
) => {
	const result = await prisma.post.create({
		data: {
			...data,
			authorId: userId,
		},
	});
	return result;
};

export const postService = {
	createPost,
};
