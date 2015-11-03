require("./style.css")

import Marionette from 'backbone.marionette';
import $ from 'jquery';
import Circle from './Figures/Circle.js';
import UserModel from './User/Model.js';
import MyApp from './App/App.js';
import Router from './Router/Router.js';
import routesController from './Router/RoutesController.js';
import AppLayout from './App/View/Layout.js';

let app = new MyApp();

app.on("start", function(options){
  if (Backbone.history){
    Backbone.history.start();
    var app = new AppLayout();
    $('body').append(app.render().$el);
    Marionette.app = app;
  }
});

let router = new Router({
  controller : routesController
});

app.start();
