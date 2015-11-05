import Backbone from 'backbone'

let UserModel = Backbone.Model.extend({
  defaults : {
      email : "no@email.com"
  }
});
export default UserModel;
