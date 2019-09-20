import express from 'express';
import { version } from '../../package.json';

const router = express.Router();

router.use((req, res, next) => {
  res.setHeader('Content-Type', 'application/json');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('api-version', version);
  next();
});

export default router;
