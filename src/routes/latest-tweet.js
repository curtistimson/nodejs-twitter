import express from 'express';
import getTweets from '../helpers/getTweets';
import formatTweet from '../helpers/formatTweet';

const router = express.Router();

router.get('/latest-tweet', (req, res) => {
  getTweets().then((tweets) => {
    res.send(JSON.stringify({ tweet: formatTweet(tweets[0].text) }));
  }).catch((error) => {
    res.status(500).json({ error });
  });
});

export default router;
