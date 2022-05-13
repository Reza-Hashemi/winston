const { format, createLogger, transports } = require('winston');
const { timestamp, combine, errors, json } = format;
require('winston-mongodb');

function buildProdLog() {
  return createLogger({
    level: 'info',
    format: combine(
      timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
      errors({ stack: true }),
      json()
    ),
    defaultMeta: { service: 'RBS-service' },
    transports: [
      new transports.File({
        filename: 'info.log',
      }),
      new transports.MongoDB({
        db: 'mongodb://localhost:27017/log',
        collection:"loger",
        options: { useUnifiedTopology: true },
      }),
    ],
  });
}

module.exports = buildProdLog;
