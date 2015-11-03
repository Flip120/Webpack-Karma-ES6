import UserCollectionView from '../User/UserCollectionView';

let routesController = {
  home : () => {
    new UserCollectionView({
      collection : [{ username : 'Jonh' }]
    })
  }
};

export default routesController;
