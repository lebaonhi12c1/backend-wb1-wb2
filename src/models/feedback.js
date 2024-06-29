import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const feedbackSchema = new Schema(
    {
        foodName: {
            type: String,
            required: true,
            trim: true,
        },
        comment: {
            type: String,
            required: true,
            trim: true,
        },

        overview: {
            type: String,
            required: true,
            trim: true,
        },

        making: {
            type: String,
            required: true,
            trim: true,
        },

        enjoy: {
            type: String,
            required: true,
            trim: true,
        },

        restaurant: {
            type: String,
            required: true,
            trim: true,
        },

        createdBy: {
            type: Schema.Types.ObjectId,
            ref: 'users',
        },
        productId: {
            type: String,
        },
    },
    {
        toJSON: {
            getters: true,
        },
        timestamps: true,
        versionKey: false,
    },
);

export const feedbackModel = model('feedbacks', feedbackSchema);
