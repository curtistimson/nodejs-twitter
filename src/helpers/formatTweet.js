import twitterText from 'twitter-text';

export default (tweetText) => ({
  text: tweetText,
  html: twitterText.autoLink(twitterText.htmlEscape(tweetText)),
});
