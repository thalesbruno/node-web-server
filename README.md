Weather app
===============
A weather application written in node.js that consumes mapbox.com and darksky.net and give you a forecast summary report of
the place you want. 

<!--ts-->
Table of contents
-----------------
* [Usage](#usage)
* [Technologies covered](#technologies-covered)
  * [Express](#express)
  * [HBS](#hbs)
  * [Heroku](#heroku)

<!--te-->
Usage
===========

Clone repository  
```bash
git clone https://github.com/thalesbruno/node-web-server
```

On brand new node-web-server directory created, run `npm install` to install all project dependencies.  

So, you'll be already able to start the app using `node src/app.js`.  


Technologies covered
====================

Express
-------
>Express is a web framework for node.

Install  
```bash
npm i express
```

Usage  
```javascript
const express = require('express')
const app = express()

app.get('', (req, res) => {
  res.send('Hello World')
})

app.listen(3000, () => {
  console.log('Server listening on port 3000')
})
```

:page_facing_up: [Read the docs](https://expressjs.com/en/4x/api.html)

HBS
---
>Express.js view engine for handlebars.js

Install  
```bash
npm install hbs
```

Usage  
```javascript
app.set('view engine', 'hbs')
```

:page_facing_up: [Read the docs](https://www.npmjs.com/package/hbs)

Heroku
------
>Heroku is a cloud platform that lets companies build, deliver, monitor and scale apps

Install  
:page_facing_up: [How to install Heroku CLI](https://devcenter.heroku.com/articles/heroku-cli)

Login into heroku from heroku local cli:  
`heroku login`

Passing ssh keys for make things secure:  
`heroku keys:add`

Creating the app name. The name must be unique in all heroku base:  
`heroku create heroku-unique-app-name`

:page_facing_up: [Read the docs](https://devcenter.heroku.com/categories/reference)
