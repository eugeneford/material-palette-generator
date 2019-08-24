const server = require('pushstate-server');

const port = 8080;

server.start({
  port,
  directories: ['./docs', './dist'],
});

console.log(`Listening on port ${port} (http://0.0.0.0:${port})`);
