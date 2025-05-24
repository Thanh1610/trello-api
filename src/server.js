import exitHook from 'exit-hook';
import express from 'express';
import { CONNECT_DB, GET_DB, CLOSE_DB } from '~/config/mongodb';
import { env } from '~/config/environment';
import { APIs_V1 } from '~/routes/v1/index';
import { errorHandlingMiddleware } from '~/middlewares/errorHandlingMiddleware';
import cors from 'cors';
import corsOptions from '~/config/cors';

const START_SERVER = () => {
    const app = express();

    app.use(cors(corsOptions));

    //Enable req.body json data
    app.use(express.json());

    //Use APIs V1
    app.use('/v1', APIs_V1);

    //Middleware xử lý lỗi tập chung
    app.use(errorHandlingMiddleware);

    app.listen(env.APP_PORT, env.APP_HOST, () => {
        console.log(`3.Example app listening on port ${env.APP_PORT}`);
    });

    exitHook(() => {
        console.log('Exiting');
        CLOSE_DB();
    });
};

//Chỉ khi kết nối Database thành công thì mới Start Server Back-end lên.
(async () => {
    try {
        console.log('1.Connecting to MongoDB Cloud Atlas...');
        await CONNECT_DB();
        console.log('2. Connected to MongoDB Cloud Atlas!');

        START_SERVER();
    } catch (error) {
        console.log(error);
        process.exit(0);
    }
})();
