import mongoose from 'mongoose';
import { feedbackModel } from '../../models/feedback';
import catchAsync from '../../utils/catch-async';

const { ObjectId } = mongoose.Types;

export const createFeedback = catchAsync(async (req, res, next) => {
    const { userId } = req.auth;

    const doc = await feedbackModel.create({ ...req.body, createdBy: userId });

    res.status(200).json({ data: doc });
});

export const getFeedback = catchAsync(async (req, res, next) => {
    const doc = await feedbackModel.find({}).populate('createdBy');

    res.status(200).json({ data: doc });
});

export const getFeedbackDetail = catchAsync(async (req, res, next) => {
    const { id } = req.params;

    const doc = await feedbackModel
        .findOne({ _id: new ObjectId(id) })
        .populate('createdBy');

    res.status(200).json({ data: doc });
});
