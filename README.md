# Calorie Tracker

## Intro

_This is a Node/Express/Knex application that I'm using to learn Node and async javascript programming. It will eventually be repackaged so that it can be used to bootstrap small Node applications. It has all of the features of a typical web app - database layer, views, models, build tools, dependency injection, etc._

## Setup

* Clone the repo
* Adapt `knexfile` to your database adapter
* Run `npm install` to install frontend dependencies
* Run `bower install` to install server dependencies
* Make sure you have gulp installed globally `npm install -g gulp`
* `gulp reset` to build the db, run migrations and setup seeds
* `gulp` to inject dependencies, build application from source and start nodemon

## Testing

* To setup integration testing, you must:
  * Install selenium server standalone 2.~.~.~
  * Install nightwatch as a global: `npm install -g nightwatch`

* Unit: `mocha test/unit`
* Integration:
  * Start java servlet: `java -jar selenium-server-standalone-2.48.2.jar`
  * Run with `nighwatch in root directory`
