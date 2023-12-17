import { Router } from 'express';
import { signinController } from './auth.controller';

const authRoute = Router();

// đăng nhập
authRoute.post('/signin', signinController);

export { authRoute };
