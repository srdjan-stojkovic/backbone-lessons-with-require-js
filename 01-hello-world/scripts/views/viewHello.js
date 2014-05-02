/*global define*/

define([
    'jquery',
    'underscore',
    'backbone',
    'text!templates/templateHello.ejs'
], function ($, _, Backbone, templateHello) {
    'use strict';

    var viewHello = Backbone.View.extend({

        render: function()
        {
           this.el.innerHTML =  _.template( templateHello, { data: this.model.attributes } );
           return this;
        }
    });

    return viewHello;
});
