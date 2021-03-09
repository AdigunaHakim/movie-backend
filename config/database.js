const { MongoClient } = require('mongodb');
const logger = require('./logger');

const _uri = 'mongodb://admin:admin@cluster0-shard-00-00.mp9sv.mongodb.net:27017,cluster0-shard-00-01.mp9sv.mongodb.net:27017,cluster0-shard-00-02.mp9sv.mongodb.net:27017/sample_mflix?ssl=true&replicaSet=atlas-10gmyx-shard-0&authSource=admin&retryWrites=true&w=majority';

const dbConnection = (collection, callback) => {
    MongoClient.connect(_uri)
    .then(async (client) => {
        const db = client.db('sample_mflix').collection(collection);
        await callback(db);
        client.close();
    })
    .catch(err => {
        logger.error(err);
    });
};

dbConnection('movies', async (db) => {
    const movie = await db.findOne();
    console.log(movie);
});

module.exports = dbConnection;