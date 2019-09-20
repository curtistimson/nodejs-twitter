import Twitter from 'twitter';

export default () => (
  new Promise((resolve, reject) => {
    const client = new Twitter({
      consumer_key: process.env.twitter_consumer_key,
      consumer_secret: process.env.twitter_consumer_secret,
      access_token_key: process.env.twitter_access_token_key,
      access_token_secret: process.env.twitter_access_token_secret,
    });

    client.get('statuses/user_timeline', { screen_name: process.env.twitter_username, count: 100 }, (error, tweets) => {
      if (!error) {
        resolve(tweets);
      } else {
        reject(error);
      }
    });
  })
);
