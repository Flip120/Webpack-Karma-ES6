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
    let appLayout = new AppLayout();
    $('body').append(appLayout.render().$el);
    app.mainLayout = appLayout;
    Marionette.app = app;
    Backbone.history.start();
  }
});

let router = new Router({
  controller : routesController
});

app.start();
