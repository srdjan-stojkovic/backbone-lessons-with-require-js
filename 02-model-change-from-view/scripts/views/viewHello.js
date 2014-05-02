/*global define*/

define([
    'jquery',
    'underscore',
    'backbone',
    'text!templates/templateHello.ejs'
], function ($, _, Backbone, templateHello) {
    'use strict';

    var viewHello = Backbone.View.extend({

        events:
        {
            'click #save' : 'updateModel'
        },

        updateModel: function()
        {
            var newValue = this.$('#message').val();
            this.model.set("message", newValue);
            this.render();
        },

        render: function()
        {
           this.el.innerHTML =  _.template( templateHello, { data: this.model.attributes } );
           return this;
        }
    });

    return viewHello;
});
