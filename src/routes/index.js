import { Router } from 'express';
import { userRoute } from '../modules/user/user.route.js';
import { authRoute } from '../modules/auth/auth.route.js';
import { feedbackRoute } from '../modules/feedback/feedback.route.js';

const routes = Router();

const apiRoutes = [
    {
        path: '/auth',
        entry: authRoute,
    },
    {
        path: '/me',
        entry: userRoute,
    },
    {
        path: '/feedback',
        entry: feedbackRoute,
    },
];

apiRoutes.forEach((route) => {
    routes.use(route.path, route.entry);
});

export { routes };
