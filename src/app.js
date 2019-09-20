import express from 'express';
import indexRouter from './routes/index';
import latestTweetRouter from './routes/latest-tweet';

const app = express();

app.use('/', indexRouter);
app.use('/', latestTweetRouter);

export default app;
