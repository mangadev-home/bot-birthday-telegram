const handler = require('./src/handler');
const {
  fetchBirthdaysRecords,
} = require('./src/apis/airtable');
const { parseISO, format } = require('date-fns');

handler.handler();
