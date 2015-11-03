import Marionette from 'backbone.marionette'

let AppRouter = Marionette.AppRouter.extend ({
    appRoutes : {
      '' : 'home'
    }
});

export default AppRouter;
