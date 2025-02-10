const { differenceInCalendarDays, parseISO } = require('date-fns');

const mapBirthdays = (records) => {
  const currentDate = new Date();
  const sameDayRecords = [];
  const sevenDaysRecords = [];
  const fifteenDaysRecords = [];
  const thirtyDaysRecords = [];
  records.forEach(function (record) {
    const birthDate = parseISO(record.get('date'));

    if (currentDate.getMonth() <= birthDate.getMonth()) {
      birthDate.setFullYear(currentDate.getFullYear());
    } else if (currentDate.getFullYear() > birthDate.getFullYear()) {
      birthDate.setFullYear(currentDate.getFullYear() + 1);
    }

    const diffInDays = differenceInCalendarDays(birthDate, currentDate);

    if (diffInDays === 0) {
      sameDayRecords.push(record.fields);
    } else if (diffInDays === 7) {
      sevenDaysRecords.push(record.fields);
    } else if (diffInDays === 15) {
      fifteenDaysRecords.push(record.fields);
    } else if (diffInDays === 30) {
      thirtyDaysRecords.push(record.fields);
    }
  });

  return [sameDayRecords, sevenDaysRecords, fifteenDaysRecords, thirtyDaysRecords];
};

module.exports = { mapBirthdays };
