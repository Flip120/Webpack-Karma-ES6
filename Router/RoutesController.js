import Marionette from 'backbone.marionette';
import Backbone from 'backbone';
import UserCollectionView from '../User/UserCollectionView';

let routesController = {
  home : () => {
    let userView = new UserCollectionView({
      collection : new Backbone.Collection([{ username : 'Jonh' }, { username : 'Jonh2' }])
    });
    userView.render();
    Marionette.app.mainLayout.showChildView('content', userView);
  }
};

export default routesController;
