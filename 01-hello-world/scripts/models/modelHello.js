/*global define*/

define([
    'underscore',
    'backbone'
], function (_, Backbone) {
    'use strict';

    var modelHello = Backbone.Model.extend({

        defaults: {
            "message": "Hello world"
        }

    });
    return modelHello;
});

