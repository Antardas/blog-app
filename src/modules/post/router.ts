import { Router } from 'express';
import { postController } from './controller';
import auth from '../../middlewares/auth';
const router = Router();

router.post('/', auth(), postController.createPost);
router.get('/', auth(), postController.getPosts);

export default router;
