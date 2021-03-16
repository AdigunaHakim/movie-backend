const { database } = require('../config');
const { userValidator, loginValidator } = require('../validator');
const { hashSync, compareSync } = require('bcryptjs')

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

    static login(userData){
        return new Promise((resolve, reject) => {

            // validate
            const validate = loginValidator.validate(userData);
            if(validate.error){
                const error = new Error(validate.error.message);
                error.statusCode = 400;
                return resolve(error);
            }

            database('users', async (db) => {
                try{
                    const user = await db.findOne({'$or': [{username: userData['username']},{email: userData['username']}]}, {projection: {username: 1, password: 1}});

                    if(!user){
                        const error = new Error('username or email not registered');
                        error.statusCode = 404;
                        return resolve(error);
                    }

                    if(!compareSync(userData['password'], user.password)){
                        const error = new Error('invalid password');
                        error.statusCode = 400;
                        return resolve(error);
                    }

                    resolve(user);
                } catch(err){
                    reject(err);
                }
            });
        });
    }
}

module.exports = User;