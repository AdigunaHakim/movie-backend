const { database } = require('../config');
const { commentValidator } = require('../validator');

class Comment {
    constructor(data) {
        this.data = data;
        this.data.createdDate = new Date();
        this.data.modifiedDate = new Date();
    }

    save() {
        return new Promise((resolve, reject) => {
            database('comments', async (db) =>{
                try {
                    const comment = await db.insertOne(this.data);
                    this.data['id'] = comment.insertedId;
                    await this.linkToMovie(this.data['id']);
                    resolve();
                } catch(err) { 
                    reject(err);
                }
            });
        });
    }

    linkToMovie(commentId) {
        return new Promise((resolve, reject) => {
            database('movies', async(db) => {
                try {
                    await db.updateOne({_id:this.data['movieId']}, {
                        '$push': {
                             comments: {
                                 '$each':[{_id: commentId, username: this.data['username'], text: this.data['text']}],
                                 '$slice': -10 //to save only 10 latest data
                             }
                        }
                    });
                    resolve();
                } catch(err){
                    reject(err);
                }
            });
        });
    }

    static update(commentId, text) {
        return new Promise((resolve, reject) => {
            database('comments', async (db) => {
                try {
                    await db.updateOne({_id: commentId}, {'$set': {text, modifiedDate: new Date()}});
                    resolve();
                } catch(err){
                    reject(err);
                }
            });
        })
    }

    static delete(commentId) {
        return new Promise((resolve, reject) => {
            database('comments', async (db) => {
                try {
                    await db.deleteOne({_id: commentId});
                    resolve();
                } catch(err){
                    reject(err);
                }
            });
        })
    }

    static validate(data) {
        const validate = commentValidator.validate(data);

        if(validate.error){
            const error = new Error(validate.error.message);
            error.statusCode = 400;
            return error;
        }

        return null;
    }
}

module.exports = Comment;