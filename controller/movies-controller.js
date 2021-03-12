const { database } = require('../config');
const { ObjectId } = require('bson');
const createError = require('http-errors');

const getMovies = (req, res, next) => {
    const page = parseInt(req.query.page);
    const limit = parseInt(req.query.limit);

    if(isNaN(page) || isNaN(limit)){
        next(createError(400));
    }

    const offset = (page - 1) * limit;

    try {
        database('movies', async (db) => {
            const movies = await db.find({}).skip(offset).limit(limit).toArray();
            res.json(movies);
        });
    } catch(err){
        next(createError(500));
    }
};

const getMovieById = (req, res, next) => {
    try {
        const _id = new ObjectId(req.params.id);
        
        database('movies', async (db) => {
            const movie = await db.findOne({_id});
    
            if(!movie) {
                next(createError(404));
            }
    
            res.json(movie);
        });
    } catch(err){
        next(createError(500));
    }
}

module.exports = {
    getMovies,
    getMovieById
}