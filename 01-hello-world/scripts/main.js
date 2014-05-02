/*global require*/
'use strict';

require.config({
    shim: {
        underscore: {
            exports: '_'
        },
        backbone: {
            deps: [
                'underscore',
                'jquery'
            ],
            exports: 'Backbone'
        },
        bootstrap: {
            deps: ['jquery'],
            exports: 'jquery'
        }
    },
    paths: {
        jquery: '../bower_components/jquery/jquery',
        backbone: '../bower_components/backbone/backbone',
        underscore: '../bower_components/underscore/underscore',
        text: '../bower_components/text/text'
    }
});

require([
    'backbone',
    'models/modelHello',
    'views/viewHello'
], function (Backbone, modelHello, viewHello) {

    var mHello = new modelHello({ "message": "Hello world"} );
    var vHello = new viewHello({"el": "#app", "model": mHello }).render();


    });


