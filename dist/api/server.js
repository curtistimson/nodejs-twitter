"use strict";

var _express = _interopRequireDefault(require("express"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Twitter = require('twitter');

var twitterText = require('twitter-text');

var app = (0, _express["default"])();
app.set('port', process.env.PORT || 5000);
app.get('/latest-tweet', function (req, res) {
  var client = new Twitter({
    consumer_key: process.env.twitter_consumer_key,
    consumer_secret: process.env.twitter_consumer_secret,
    access_token_key: process.env.twitter_access_token_key,
    access_token_secret: process.env.twitter_access_token_secret
  });
  res.setHeader('Content-Type', 'application/json');
  res.setHeader('Access-Control-Allow-Origin', '*');
  client.get('statuses/user_timeline', {
    screen_name: process.env.twitter_username,
    count: 100
  }, function (error, tweets) {
    var formatTweet = function formatTweet(tweet) {
      return {
        text: tweet.text,
        html: twitterText.autoLink(twitterText.htmlEscape(tweet.text))
      };
    };

    if (!error) {
      res.send(JSON.stringify({
        tweet: formatTweet(tweets[0])
      }));
    } else {
      res.status(500).json({
        error: error
      });
    }
  });
});
app.listen(app.get('port'));