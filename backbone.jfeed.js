// Created by Kendall Buchanan, (https://github.com/kendagriff)
// MIT licence
// Version 0.0.1

(function() {
  // Wrap an optional error callback with a fallback error event.
  var wrapError = function(onError, model, options) {
    return function(resp) {
      if (onError) {
        onError(model, resp, options);
      } else {
        model.trigger('error', model, resp, options);
      }
    };
  };

  Backbone.JFeed = {};
  Backbone.JFeed.Collection = Backbone.Collection.extend({
    fetch: function(options) {
      if (!this.feedUrl) throw new Error('A "feedUrl" property must be specified');
      options || (options = {});
      var collection = this;
      var success = options.success;
      options.success = function(resp, status, xhr) {
        collection.reset(collection.parse(resp.items, xhr), options)
        if (success) success(collection, resp);
      };
      options.error = wrapError(options.error, collection, options);
      return $.getFeed(_.extend({ url: this.feedUrl }, options))
    }
  });

}).call(this);