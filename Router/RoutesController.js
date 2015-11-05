import Marionette from 'backbone.marionette';
import Backbone from 'backbone';
import UserCollectionView from '../User/Views/UserCollectionView';
import UserModel from '../User/Model/Model.js';

let routesController = {
  home : () => {
    let userView = new UserCollectionView({
      collection : new (Backbone.Collection.extend({
        model : UserModel
      }))([{ username : 'Jonh', 'email' : 'email molon' }, { username : 'Jonh2' }])
    });
    userView.render();
    Marionette.app.mainLayout.showChildView('content', userView);
  }
};

export default routesController;
