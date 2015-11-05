import Marionette from 'backbone.marionette';
let AppLayout = Marionette.LayoutView.extend({

  id() {
    return 'app-layout';
  },

  regions : {
    menu : '#menu',
    content : '#content'
  },

  template : require('../Template/Layout.hbs')
});

export default AppLayout;
