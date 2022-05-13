const { format, createLogger, transports } = require('winston');
const { timestamp, combine, errors, json } = format;

function buildDevLog() {
  return createLogger({
    level:"info",
    format: combine(
      timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
      errors({ stack: true }),
      json()
    ),
    defaultMeta: { service: 'RBS-service' },
    transports: [ new transports.Console()],
  });
}

module.exports = buildDevLog;
