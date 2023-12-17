import { Router } from 'express';
import { getMe } from './user.controller';
import { authMiddleware } from '../../middlewares/auth.middleware';

const userRoute = Router();

userRoute.get('/', authMiddleware(), getMe);

export { userRoute };
