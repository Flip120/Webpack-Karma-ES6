import Marionette from 'backbone.marionette';
import Backbone from 'backbone';
import UserCollectionView from '../User/Views/UserCollectionView';
import UserModel from '../User/Model/Model.js';

import SearchView from '../Search/Views/SearchView.js';


let loadSubViewInContent = (childView) => {
    Marionette.app.mainLayout.showChildView('content', childView);
};

let routesController = {
    home : () => {

        let userView = new UserCollectionView({
            collection : new (Backbone.Collection.extend({
                model : UserModel
            }))([{ username : 'Jonh', 'email' : 'email molon' }, { username : 'Jonh2' }])
        });

        userView.render();
        this.loadInContent(userView);
    },

    recommend : () => {
         var searchView = new SearchView();
         searchView.render();
        loadSubViewInContent(searchView);
    },


};

export default routesController;
