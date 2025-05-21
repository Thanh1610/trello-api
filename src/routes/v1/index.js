import express from 'express';
import { StatusCodes } from 'http-status-codes';
import { boardRouter } from './boardRoutes';

const Router = express.Router();

//check APIs_V1
Router.get('/status', (req, res) => {
    res.status(StatusCodes.OK).json({ message: 'apiV1', code: StatusCodes.OK });
});

//Board APIs
Router.use('/boards', boardRouter);

export const APIs_V1 = Router;
