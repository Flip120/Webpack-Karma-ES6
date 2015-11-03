import Marionette from 'backbone.marionette';

class UserCollectionView extends Marionette.ItemView {
  initialize(){
    console.log(this.model);
  }
}

export default UserCollectionView;
