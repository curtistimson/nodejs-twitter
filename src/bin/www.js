import http from 'http';
import app from '../app';

require('dotenv').config();

const port = process.env.PORT || 5000;
app.set('port', port);

const server = http.createServer(app);

server.listen(port);
server.on('listening', () => {
  const addr = server.address();
  const bind = typeof addr === 'string' ? `pipe ${addr}` : `port ${addr.port}`;
  // eslint-disable-next-line no-console
  console.log(`Listening on ${bind}`);
});
