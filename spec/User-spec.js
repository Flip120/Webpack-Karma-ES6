import UserModel from '../User/Model/Model.js';

describe('UserModel', () => {
  it('A instance must have no@email by default', () => {
    let userModel = new UserModel({});
    console.log("userModel.email", userModel.get('email'));
    expect(userModel.get('email')).toEqual('no@email.com');
  });
});
