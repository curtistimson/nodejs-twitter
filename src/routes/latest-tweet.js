import express from 'express';
import getTweets from '../helpers/getTweets';
import formatTweet from '../helpers/formatTweet';
import { version } from '../../package.json';

const router = express.Router();

router.get('/latest-tweet', (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('api-version', version);

  getTweets().then((tweets) => {
    res.send(JSON.stringify({ tweet: formatTweet(tweets[0].text) }));
  }).catch((error) => {
    res.status(500).json({ error });
  });
});

export default router;
