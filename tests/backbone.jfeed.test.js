// Sample Post
var Post = Backbone.Model.extend({});
var PostsCollection = Backbone.JFeed.Collection.extend({
  model: Post,
  feedUrl: 'http://localhost:4000/feed.xml'
});

$.getFeed = function(options) {
  var xml = " \
<?xml version=\"1.0\"> \
<rss version=\"2.0\"> \
  <channel> \
    <title>FeedForAll Sample Feed</title> \
    <description>RSS is a fascinating technology. The uses for RSS are expanding daily. Take a closer look at how various industries are using the benefits of RSS in their businesses.</description> \
    <link>http://www.feedforall.com/industry-solutions.htm</link> \
    <copyright>Copyright 2004 NotePage, Inc.</copyright> \
    <docs>http://blogs.law.harvard.edu/tech/rss</docs> \
    <language>en-us</language>\
    <pubDate>Tue, 19 Oct 2004 13:38:55 -0400</pubDate> \
    <image>\
      <url>http://www.feedforall.com/ffalogo48x48.gif</url> \
      <title>FeedForAll Sample Feed</title> \
      <link>http://www.feedforall.com/industry-solutions.htm</link> \
      <description>FeedForAll Sample Feed</description> \
      <width>48</width> \
      <height>48</height> \
    </image> \
    <item> \
      <title>RSS Solutions for Restaurants</title> \
      <description>&lt;b&gt;FeedForAll &lt;/b&gt;helps Restaurant&apos;s communicate with customers. Let your customers know the latest specials or events.&lt;br&gt; \
&lt;br&gt; \
RSS feed uses include:&lt;br&gt; \
&lt;i&gt;&lt;font color=&quot;#FF0000&quot;&gt;Daily Specials &lt;br&gt; \
Entertainment &lt;br&gt; \
Calendar of Events &lt;/i&gt;&lt;/font&gt;</description> \
      <link>http://www.feedforall.com/restaurant.htm</link> \
      <pubDate>Tue, 19 Oct 2004 11:09:11 -0400</pubDate> \
    </item> \
    <item> \
      <title>RSS Solutions for Schools and Colleges</title> \
      <description>FeedForAll helps Educational Institutions communicate with students about school wide activities, events, and schedules.&lt;br&gt; \
&lt;br&gt; \
RSS feed uses include:&lt;br&gt; \
&lt;i&gt;&lt;font color=&quot;#0000FF&quot;&gt;Homework Assignments &lt;br&gt; \
School Cancellations &lt;br&gt; \
Calendar of Events &lt;br&gt; \
Sports Scores &lt;br&gt; \
Clubs/Organization Meetings &lt;br&gt; \
Lunches Menus &lt;/i&gt;&lt;/font&gt;</description> \
      <link>http://www.feedforall.com/schools.htm</link> \
      <pubDate>Tue, 19 Oct 2004 11:09:09 -0400</pubDate> \
    </item> \
  </channel> \
</rss>"
  var feed = new JFeed(xml);
  options.success(feed);
};

$(document).ready(function() {
  // Setup
  module('core', {
    setup: function() {
      this.posts = new PostsCollection();
    }
  });

  // Tests
  test("Require feedUrl for jFeed", function() {
    this.posts.feedUrl = null;
    raises(this.posts.fetch, 'A "feedUrl" property must be specified');
  });

  test("Fetch RSS feed", 2, function() {
    var self = this;
    stop();
    setTimeout(function() {
      self.posts.fetch({
        success: function(collection) {
          equal(2, collection.length);
          equal('RSS Solutions for Schools and Colleges', collection.last().get('title'))
          start();
        }
      });
    }, 1000);
  });

});