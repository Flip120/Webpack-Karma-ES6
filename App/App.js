import Marionette from 'backbone.marionette'

class App extends Marionette.Application {
  initialize(options) {
    console.log("Initialized App");
  }
}
export default App;
