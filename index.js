const rc = require('rc');
const winston = require('winston');
const config = rc('testapp', {
  logstash: { appName: 'testapp' }
});

require('winston-logstash-udp');

winston.add(winston.transports.LogstashUDP, config.logstash);
const log = winston;
let count = 0;
setInterval(() => {
  log.info('Hello World!', { count: ++count });
}, 5000);

