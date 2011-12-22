# Backbone.jFeed

A drop-in plugin that allows you to turn Backbone.js's `Collection` object into an RSS/ATOM feed.

### Dependencies

* [jFeed from jfhovinne](https://github.com/jfhovinne/jFeed)
* [Backbone.js](http://documentcloud.github.com/backbone/) (Tested in 0.5.3)
* [Underscore.js](http://documentcloud.github.com/underscore/) (Tested in 1.2.3)

## Installation

Add these dependencies to your `<head>`, **in order**:

```
<script src="vendor/jquery.js"></script>
<script src="vendor/underscore.js"></script>
<script src="vendor/backbone.js"></script>
<script src="vendor/jquery.jfeed.js"></script>
<script src="../backbone.jfeed.js"></script>
<script src="backbone.jfeed.test.js"></script>
```

## Usage

Simply extend the `Backbone.JFeed.Collection` instead of `Backbone.Collection`.

```
var PostsCollection = Backbone.JFeed.Collection.extend({
  model: Post,
  feedUrl: 'http://yourdomain/feed.xml'
});

var posts = new PostsCollection();
posts.fetch();

posts.first().get('title')
=> 'Title of My Blog Post'
```

**NOTE:** As we're talking about feeds, the `add` and `create` methods of `Backbone.JFeed.Collection` will obviously not work.