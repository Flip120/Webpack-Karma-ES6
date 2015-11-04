import Marionette from 'backbone.marionette';

let UserCollectionView = Marionette.ItemView.extend({

  template(model) {
    return '<p>Hola k ase? soy ' + model.username + '</p>';
  }
});

export default UserCollectionView;
