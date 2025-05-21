import { MongoClient, ServerApiVersion } from 'mongodb';
import 'dotenv/config';

let trelloDB = null;

const client = new MongoClient(process.env.MONGODB_URI, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    },
});

export const CONNECT_DB = async () => {
    await client.connect();
    trelloDB = client.db(process.env.DATABASE_NAME);
};

export const GET_DB = () => {
    if (!trelloDB) throw new Error('Must connect to Database first!');
    return trelloDB;
};
