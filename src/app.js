import express from 'express';
import latestTweetRouter from './routes/latest-tweet';

const app = express();

app.use('/', latestTweetRouter);

export default app;
