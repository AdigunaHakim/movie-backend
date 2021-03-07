const { MongoClient } = require('mongodb');
const logger = require('./logger');

const _uri = 'mongodb+srv://adiguna_surya:hXBqJop9Zf3KSMzQ@movie-app.ts9sk.mongodb.net/sample_mflix?retryWrites=true&w=majority&ssl=true';

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