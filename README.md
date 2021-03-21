# movie-backend

this is simple REST API apps build with node.js and mongo as database, include feature :
- CRUD service
- integrate logger with morgan & winston library
- user verification & authorization (with JSON Web Token)

##### path :
- **(POST)** auth/signup
- **(POST)** auth/login
- **(GET)** movies?page={page}&limit={limit}
- **(GET)** movies/detail/:movieId
- **(POST)** comment/createComment/:movieId
- **(PUT)** comment/editComment/:commentId
- **(DELETE)** comment/deleteComment/:commentId

##### how to :

- install node.js https://nodejs.org/en/download/
- create your secret key at root directory named with `private.key`
- create your env file on `.env` at root directory contains `MONGO_URI` & `PORT`
- run command `npm install` to install all dependency
- run command `npm start` and enjoy :)

##### npm command :
- `npm init` to create initial project
- `npm install --save dependency` or shorthand `npm i dependency` when without version will download latest version
- `npm install --save dependency@version` will download spesific dependency version
- `npm install --save-dev  dependency` for development dependecy
- `npm install -g` to install dependency as global to all project
- `npm list` for check all dependency tree or `npm list --depth=0` to check main dependency 
- `npm view dependency` to check detail dependency
- `ncu` stand for `npm check update` to check any update & fix dependency version
- `ncu -u` to check and update package.json dependency version then `npm install` after it
- `npn uninstall @dependency` to uninstall spesific dependency
