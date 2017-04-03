# HR Stats app

## Initial Setup

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
npm start
```

## Deploy

* https://devcenter.heroku.com/articles/deploying-nodejs

rm -rf node_modules; npm install --production

# run app locally prior to Heroku

heroku local --procfile Procfile

# check Node version
node --version

# update package.json with "engine" whose value is node version used in dev

```
heroku login
heroku apps:create rumedge-stats
heroku buildpacks:set https://github.com/jordansissel/heroku-buildpack-meteor.git
heroku config:add ROOT_URL=https://rumedge-stats.herokuapp.com
git remote -v
git push heroku master
heroku logs --tail --app rumedge-stats
```