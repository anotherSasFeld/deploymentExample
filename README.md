LongPollingChat  <img src="https://travis-ci.org/anotherSasFeld/deploymentExample.svg?branch=master" alt="Travis Build Status"/>
=========

This node.js LongpollingChat is used to demonstrate one possible deployment pipeline.


Technology
------------

The Node.JS application starts a server which also servers an User interface to use the chat. 

- User Interface: http://[path-to-app]/

It uses the NPM package manager to define the dependencies. 


UnitTests
------------

UnitTests are written in NodeUnit.

The nodeunit module was added as git submodule. To install it locally, use the following commands

```
git submodule init
git submodule update
```

Now you can run the tests using:

```
./node_modules/bin/nodeunit chat/test/server
```


Setup of your local environment
------------

To run the app locally, you can either use the foreman server (built-in in Heroku) on the app root:

```
git clone https://github.com/anotherSasFeld/deploymentExample
foreman start
```

Otherwise, install the following:

1. Install node.js including the npm packaging manager
2. git clone https://github.com/anotherSasFeld/deploymentExample
3. Add a new environment for your testing environment in config/environment.json
4. Set the NODE_ENV environment variable to the name of your testing environment configured in 3.
5. For unittests, see "UnitTests" section.
6. Start the app using:

```
node chat/server/LongPollingChat.js
```


Continous Integration on Travis
------------

- You can find the build overview on: https://travis-ci.org/anotherSasFeld/deploymentExample 
- The current installation is very simple: "npm install nodeunit -g"


Production system
------------

The app will be deployed to Heroku. 

- URL to the Live App: http://peaceful-stream-4615.herokuapp.com
- Correct NODE_ENV Setting: 'heroku' (set via heroku config:set NODE_ENV=heroku)


