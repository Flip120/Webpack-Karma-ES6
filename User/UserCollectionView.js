import Marionette from 'backbone.marionette';
import UserRowView from './UserRow.js';

class UserCollectionView extends Marionette.CollectionView {

  childView : UserRowView

  initialize(){
    console.log("Initialize!!");
  }
}

export default UserCollectionView;
