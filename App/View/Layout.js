import Marionette from 'backbone.marionette';
class AppLayout extends Marionette.LayoutView {

  id() {
    return 'app-layout';
  }

  template() {
      return '<div id="menu"></div><div id="content"></div>';
  }
};

export default AppLayout;
