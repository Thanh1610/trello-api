import { StatusCodes } from 'http-status-codes';
import ApiError from '~/utils/ApiError';

const createNew = async (req, res, next) => {
    try {
        // throw new ApiError(StatusCodes.BAD_GATEWAY, 'thanh test error');
        res.status(StatusCodes.CREATED).json({ message: 'Post from Controller: API create new board' });
    } catch (error) {
        next(error);
    }
};

export const boardController = { createNew };
