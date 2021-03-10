const { database } = require('../config');
const { ObjectId } = require('bson');

const getMovies = (req, res, next) => {
    const page = parseInt(req.query.page);
    const limit = parseInt(req.query.limit);

    if(isNaN(page) || isNaN(limit)){
        res.status(400).send('Bad Request');
    }

    const offset = (page - 1) * limit;

    database('movies', async (db) => {
        const movies = await db.find({}).skip(offset).limit(limit).toArray();
        res.json(movies);
    });
};

const getMovieById = (req, res, next) => {
    const _id = new ObjectId(req.params.id);

    database('movies', async (db) => {
        const movie = await db.findOne({_id});

        if(!movie) {
            res.status(404).send('Data Not Found');
        }

        res.json(movie);
    })
}

module.exports = {
    getMovies,
    getMovieById
}