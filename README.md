# movie-backend

This simple rest api build with node.js and mongo as database. Include feature :

- GET/POST Request (movies, comment etc)
- Signup 
- Login
- JWT Authorization 

##### requirement :

install node js :
https://nodejs.org/en/download/

- create your secret key at root named with `private.key`
- run command `npm install` then `npm start`

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
