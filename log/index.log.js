const buildProdLog = require('./prod.log');
const buildDevLog = require('./dev.log');
let log = null;
if (process.env.NODE_ENV === 'dev') {
  log = buildDevLog();
} else {
  log = buildProdLog();
}

module.exports = log;
