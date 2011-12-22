# Backbone.jFeed

A drop-in plugin that allows you to turn Backbone.js's `Collection` object into an RSS/ATOM feed. Much thanks to [Jean-François Hovinne](http://hovinne.com/) for the [jFeed](https://github.com/jfhovinne/jFeed) library.

### Dependencies

* [jFeed from jfhovinne](https://github.com/jfhovinne/jFeed)
* [JQuery](http://jquery.com/)
* [Backbone.js](http://documentcloud.github.com/backbone/) (Tested in 0.5.3)
* [Underscore.js](http://documentcloud.github.com/underscore/) (Tested in 1.2.3)

## Installation

Add these dependencies to your `<head>`, **in order**:

```
<script src="jquery.js"></script>
<script src="underscore.js"></script>
<script src="backbone.js"></script>
<script src="jquery.jfeed.js"></script>
<script src="backbone.jfeed.js"></script>
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