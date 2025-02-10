const {
  fetchBirthdaysRecords,
} = require('./apis/airtable');
const { sendMessages } = require('./apis/telegram');

exports.handler = async (event) => {
  try {
    const birthDaysRecords = await fetchBirthdaysRecords();
    await sendMessages(birthDaysRecords);
  } catch (err) {
    console.error(err);
  }
};
