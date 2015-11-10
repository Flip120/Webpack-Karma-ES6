import Marionette from 'backbone.marionette';

let SearchView = Marionette.ItemView.extend({
  template : require('../Template/Search.hbs')
});

export default SearchView;
