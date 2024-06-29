import { Router } from 'express';
import { signinController } from './auth.controller.js';

const authRoute = Router();

// đăng nhập
authRoute.post('/signin', signinController);

export { authRoute };
