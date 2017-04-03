# HR Stats app

## Initial Setup

* Update NPM dependencies 
```bash
npm install
npm update
```

* Install and update Meteor
```bash
# docs meteor docs.meteor.com
# install meteor on Mac https://install.meteor.com/
curl https://install.meteor.com/ | sh

# update meteor
meteor update --all-packages
meteor npm install --save react
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