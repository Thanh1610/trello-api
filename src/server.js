import express from 'express';
import { CONNECT_DB, GET_DB } from '~/config/mongodb';

const START_SERVER = () => {
    const app = express();

    const hostname = 'localhost';
    const port = 3001;

    app.get('/', async (req, res) => {
        console.log(await GET_DB().listCollections().toArray());
        res.end('<h1>Hello World!</h1><hr>');
    });

    app.listen(port, hostname, () => {
        console.log(`3.Example app listening on port ${port}`);
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

// console.log('1.Connecting to MongoDB Cloud Atlas...');
// CONNECT_DB()
//     .then(() => console.log('2. Connected to MongoDB Cloud Atlas!'))
//     .then(() => START_SERVER())
//     .catch((error) => {
//         console.log(error);
//         process.exit(0);
//     });
