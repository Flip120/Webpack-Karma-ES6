import Backbone from 'backbone'

class UserModel extends Backbone.Model {
  defaults() {
    return {
      email : "no@email.com"
    }
  }
}
export default UserModel;
