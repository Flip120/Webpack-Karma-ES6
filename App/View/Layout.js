import Marionette from 'backbone.marionette';
let AppLayout = Marionette.LayoutView.extend({

  id() {
    return 'app-layout';
  },

  regions : {
    menu : '#menu',
    content : '#content'
  },

  template() {
      return '<div id="menu"></div><div id="content"></div>';
  }
});

export default AppLayout;
