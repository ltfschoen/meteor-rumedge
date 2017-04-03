# HR Stats app

## Initial Setup

* Switch to latest Node version using NVM
```
$ nvm use 7.7.4
Now using node v7.7.4 (npm v4.1.2)
```

* Check that Meteor Node version and Node version are the same
```
$ node -v
v7.7.4

$ meteor node -v
v4.8.0
``` 

* Find out location of Meteor Node (Important: Run the app once before running `mnode`)
```
which meteor node
nvm install 4.8.0
```

* Update NPM dependencies 
```bash
meteor npm install
meteor npm update
```

* Install and update Meteor
```bash
# docs meteor docs.meteor.com
# install meteor on Mac https://install.meteor.com/
curl https://install.meteor.com/ | sh

# update meteor
meteor update --all-packages
meteor npm install --save react react-dom react-tap-event-plugin react-router material-ui react-chartjs-2
```

* Update Brew and install Yarn
```bash
# install yarn https://yarnpkg.com/en/docs/install
brew update
brew install yarn
```

* Modify files to be compatible

```bash
# change package.json 
	- react-dom ^15.4.2 
  - react-tap-event-plugin ^2.0.1

# change `export default class App` to `export class App`
```

* Install dependencies with Yarn
```bash
# install all project dependencies
yarn install
```

* Run app web server
```
npm run dev
```

## Deploy

### Test Local Deployment

* run app locally prior to Heroku https://devcenter.heroku.com/articles/deploying-nodejs
```
rm -rf node_modules; npm install --production
heroku local --procfile Procfile
```

# check Node version
node --version

# update package.json with "engine" whose value matches Meteor Node version 4.8.0

```
heroku login
heroku apps:create rumedge-stats
heroku buildpacks:set https://github.com/jordansissel/heroku-buildpack-meteor.git
heroku config:add ROOT_URL=https://rumedge-stats.herokuapp.com
git remote -v
git push heroku master
heroku logs --tail --app rumedge-stats
heroku run bash --app rumedge-stats
	~ $ node build/bundle/main.js

	/app/build/bundle/programs/server/mini-files.js:74
	const unicodeNormalizePath = (path) => {
	                                     ^
	SyntaxError: Unexpected token >
```