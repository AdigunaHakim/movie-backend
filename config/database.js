const { MongoClient } = require('mongodb');
const logger = require('./logger');

const _uri = '';

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

dbConnection('movie', async (db) => {
    const movie = await db.findOne();
    console.log(movie);
});

module.exports = dbConnection;