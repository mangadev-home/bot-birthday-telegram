const Airtable = require('airtable');
const { mapBirthdays } = require('../mappers/mapBirthdays');

Airtable.configure({
  endpointUrl: 'https://api.airtable.com',
  apiKey: 'your-airtable-api-key', // TODO: add your api key here
});
const base = Airtable.base('your-airtable-base-id'); // TODO: add your base id here

const fetchBirthdaysRecords = async () => {
  const records = await base('birthdays')
    .select({
      view: 'Grid view',
    })
    .firstPage();

  return mapBirthdays(records);
};

module.exports = {
  fetchBirthdaysRecords,
};
