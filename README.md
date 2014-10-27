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

The nodeunit module was added as git submodule. To run it locally, use the following commands

```
git submodule init
git submodule update
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


