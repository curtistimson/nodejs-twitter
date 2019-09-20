"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _twitter = _interopRequireDefault(require("twitter"));

var _twitterText = _interopRequireDefault(require("twitter-text"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var app = (0, _express["default"])();
app.get('/latest-tweet', function (req, res) {
  var client = new _twitter["default"]({
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
        html: _twitterText["default"].autoLink(_twitterText["default"].htmlEscape(tweet.text))
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
var _default = app;
exports["default"] = _default;