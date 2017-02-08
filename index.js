const bunyan = require('bunyan');
const log = bunyan.createLogger({
  name: 'testapp'
});
let count = 0;
setInterval(() => {
  log.info({ count: ++count }, 'Hello World');
}, 5000);

