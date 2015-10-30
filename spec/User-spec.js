import UserModel from '../User/Model.js';

console.log("UserModel", UserModel);
describe('UserModel', () => {
  it('A instance must have no@email by default', () => {
    let userModel = new UserModel({});
    console.log("userModel.email", userModel.get('email'));
    expect(userModel.get('email')).toEqual('no@email.com');
  });

});