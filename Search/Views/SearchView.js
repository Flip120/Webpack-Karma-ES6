import Marionette from 'backbone.marionette';

let SearchView = Marionette.ItemView.extend({

    ui: {
        "searchBtn": "#btn-search",
        "randomBtn": "#btn-random"
    },

    events: {
        "click @ui.searchBtn": "search",
        "click @ui.randomBtn": "random"
    },

    search (){
        console.log('Search');
    },

    random (){
        console.log('Random');
    },

    template : require('../Template/Search.hbs')
});

export default SearchView;
