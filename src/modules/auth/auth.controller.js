import { getUserByEmail } from './auth.service';
import { generateToken } from '../token/token.controller';
import { userModel } from '../../models/user.model';
import catchAsync from '../../utils/catch-async';
import { googleOAuth } from '../../utils/google-auth';

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
