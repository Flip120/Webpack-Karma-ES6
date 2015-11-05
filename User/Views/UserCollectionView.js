import _ from 'underscore';
import Marionette from 'backbone.marionette';
import UserRowView from './UserRow.js';

let UserCollectionView = Marionette.CollectionView.extend ({
  childView : UserRowView
});

export default UserCollectionView;
