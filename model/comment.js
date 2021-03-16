const { database } = require('../config');
const { commentValidator } = require('../validator');

class Comment {
    constructor(data){
        this.data = data;
        this.data.createdDate = new Date();
        this.data.modifiedDate = new Date();
    }

    save(){
        return new Promise((resolve, reject) => {
            database('comment', async (db) =>{
                try {
                    await db.insertOne(this.data);
                    resolve();
                } catch(err) { 
                    reject(err);
                }
            });
        });
    }

    static validate(data){
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