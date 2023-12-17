import mongoose from 'mongoose';
import validator from 'validator';

const { Schema, model } = mongoose;

const userSchema = new Schema(
    {
        fullname: {
            type: String,
            required: true,
            trim: true,
            minlength: 3,
            maxlength: 50,
        },

        avatar: {
            type: String,
            required: false,
        },

        email: {
            type: String,
            required: true,
            trim: true,
            lowercase: true,
            index: true,
            unique: true,
            validate: {
                validator: function (value) {
                    return validator.isEmail(value);
                },
                message: 'Invalid Email',
            },
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

userSchema.statics.isEmailExisted = async function (email) {
    const user = await this.findOne({ email }).lean();

    return { existed: Boolean(user), data: user };
};

export const userModel = model('users', userSchema);
