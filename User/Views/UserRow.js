import Marionette from 'backbone.marionette';

let UserCollectionView = Marionette.ItemView.extend({
  template : require('../Template/UserRow.hbs')
});

export default UserCollectionView;
