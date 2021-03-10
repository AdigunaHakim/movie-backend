const { database } = require('../config');

const getMovies = (req, res, next) => {
    const page = parseInt(req.query.page);
    const limit = parseInt(req.query.limit);
    
    if(isNaN(page) || isNaN(limit)){
        res.status('400').send('Bad Request');
    }

    const offset = (page - 1) * limit;

    database('movies', async (db) => {
        const movies = await db.find({}).skip(offset).limit(limit).toArray();
        res.json(movies);
    });
};

module.exports = {
    getMovies
}