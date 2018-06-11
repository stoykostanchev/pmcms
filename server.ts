import { Http2ServerResponse } from "http2";

import { prop, Typegoose, ModelType, InstanceType } from 'typegoose';
// import * as mongoose from 'mongoose';

// mongoose.connect('mongodb://localhost:27017/test');

class User extends Typegoose {
  @prop()
  surname?: string;
}

const UserModel = new User().getModelForClass(User);
console.log(UserModel.modelName)

// ------------------ FORMS ------------------------------

//https://www.forms-angular.org/#/get-started
var express = require('express');
var mongoose = require("mongoose");
var app = express();
var bodyParser = require('body-parser');
var methodOverride = require('method-override');

var formsAngular = require('forms-angular');   // The server side of forms-angular

// Connect to database - no error handling in this quick example
mongoose.connect('mongodb://localhost:27017/test');

// Set up express and middleware
app.use(express.static('app'));
app.use(express.static('bower_components'));
app.use(express.static('node_modules'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(methodOverride());

// Initialise forms angular server
var DataFormHandler = new (formsAngular)(mongoose, app, {urlPrefix: '/api/'});

// This sets up all the /api/ routes
// var fs = require('fs');
// fs.readdirSync('models').forEach(function (file) {
//   if (fs.statSync('models/' + file).isFile()) {
//     DataFormHandler.newResource(require('./models/' + file));
//   }
// });

DataFormHandler.newResource(UserModel);

// Anything we haven't already told Express about redirects to index.html and starts Angular
app.get(function(req: Express.Request, res: Express.Response) {
  (<any>res).sendFile('./app/index.html');
});

// Wait for the user
app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
