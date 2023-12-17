import { Router } from 'express';
import { authMiddleware } from '../../middlewares/auth.middleware';
import {
    createFeedback,
    getFeedback,
    getFeedbackDetail,
} from './feedback.controller';

const feedbackRoute = Router();

feedbackRoute.post('/', authMiddleware(), createFeedback);
feedbackRoute.get('/', getFeedback);
feedbackRoute.get('/:id', getFeedbackDetail);

export { feedbackRoute };
