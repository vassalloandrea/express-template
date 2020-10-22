# ExpressJS Rest API template

This is the template that I usually use to create a new ExpressJS REST API project.
Feel free to contribute opening issue and/or making PRs :heart:

## Main technologies

- [ExpressJS](https://github.com/expressjs/express)
- [TypeORM](https://github.com/typeorm/typeorm)
- [Jest](https://github.com/facebook/jest)
- [ESlint](https://github.com/eslint/eslint)
- [Prettier](https://github.com/prettier/prettier)

## Running Locally

Make sure you have [Node.js](http://nodejs.org/)

```sh
git clone git@github.com:vassalloandrea/express-template.git
cd express-template
npm install
npm run dev
```

Your app should now be running on [localhost:5000](http://localhost:5000/).

You can also set an ENV variables called PORT to change it during the startup.

## Run tests

This project uses Jest to run specs.

```sh
npm run jest
```

## Run linter

This project uses ESlint and Prettier to check code style.

```
npm run eslint
```
