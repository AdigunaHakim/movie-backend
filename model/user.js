const { database } = require('../config');
const { userValidator } = require('../validator');
const { hashSync } = require('bcryptjs')

class User {
    constructor(userData){
        this.userData = {...userData}
    };

    save(cb){
        database('users', async (db) =>{
            try {
                const hashPassword = hashSync(this.userData['password'], 12);
                this.userData['password'] = hashPassword;
                await db.insertOne(this.userData);
                cb();
            } catch(err){
                cb(err);
            }
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
                            check: true,
                            message: 'this username already in use'
                        });
                    } else if(this.userData['email'] === user.email){
                        resolve({
                            check: true,
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