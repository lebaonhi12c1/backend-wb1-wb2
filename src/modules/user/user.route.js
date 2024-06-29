import { Router } from 'express';
import { getMe } from './user.controller.js';
import { authMiddleware } from '../../middlewares/auth.middleware.js';

const userRoute = Router();

userRoute.get('/', authMiddleware(), getMe);

export { userRoute };
