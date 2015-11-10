import Marionette from 'backbone.marionette'

let AppRouter = Marionette.AppRouter.extend ({
    appRoutes : {
      '' : 'recommend'
    }
});

export default AppRouter;
