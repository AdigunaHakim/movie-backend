const { database } = require('../config');
const { userValidator } = require('../validator');

class User {
    constructor(userData){
        this.userData = {...userData}
    };

    save(){
        database('users', db =>{
            db.insertOne(this.userData);
        });
    }

    checkExistence(){
        return new Promise((resolve, reject) => {
            try{
                database('users', async (db) => {
                    const user = await db.findOne({'$or': [{username: this.userData['username']},{email: this.userData['email']}]});

                    if(!user){
                        resolve({
                            check: false
                        });
                    } else if(this.userData['username'] === user.username){
                        resolve({
                            check: false,
                            message: 'this username already in use'
                        });
                    } else if(this.userData['email'] === user.email){
                        resolve({
                            check: false,
                            message: 'this email already in use'
                        });
                    }
                });
            } catch(err) {
                reject(err);
            }
        });
    }

    static validate(userData){
        return userValidator.validate(userData);
    }
}

module.exports = User;