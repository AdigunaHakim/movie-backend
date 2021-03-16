const { MongoClient } = require('mongodb');
const logger = require('./logger');

const _uri = process.env.MONGO_URI;

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

module.exports = dbConnection;