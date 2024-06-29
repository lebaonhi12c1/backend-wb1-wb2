import { getUserByEmail } from './auth.service.js';
import { generateToken } from '../token/token.controller.js';
import { userModel } from '../../models/user.model.js';
import catchAsync from '../../utils/catch-async.js';
import { googleOAuth } from '../../utils/google-auth.js';

export const signinController = catchAsync(async (req, res, next) => {
    const { access_token } = req.body;

    let data;

    const userInfo = await googleOAuth(access_token);

    const { existed: isEmailExisted, data: user } = await getUserByEmail(
        userInfo.email,
    );

    if (!isEmailExisted) {
        const doc = await userModel.create({
            fullname: userInfo.name,
            avatar: userInfo.picture,
            email: userInfo.email,
        });

        data = doc;
    } else {
        data = user;
    }

    const token = generateToken({ userId: data._id }, { userId: data._id });

    res.status(200).json(token);
});
