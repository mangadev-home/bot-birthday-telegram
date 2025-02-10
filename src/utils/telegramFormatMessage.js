const { parseISO, format } = require('date-fns');

const formatBirthdayMessage = ([
  sameDayRecords,
  sevenDaysRecords,
  fifteenDaysRecords,
  thirtyDaysRecords,
]) => {
  let msg = '\n🎂 Aniversários 🎂';
  const msgTemplate = (d) =>
    `  • ${format(parseISO(d.date), 'dd/MM')} ${d.nickname} ${d.gift ? '🎁' : ''}`;

  if (sameDayRecords.length) {
    msg += `\n\n🎈Aniverários do DIA 🎈\n${sameDayRecords.map((d) => msgTemplate(d)).join('\n')}`;
  }

  if (sevenDaysRecords.length) {
    msg += `\n\n7️⃣ dias para os aniverários:\n${sevenDaysRecords
      .map((d) => msgTemplate(d))
      .join('\n')}`;
  }

  if (fifteenDaysRecords.length) {
    msg += `\n\n1️⃣5️⃣ dias para os aniverários:\n${fifteenDaysRecords
      .map((d) => msgTemplate(d))
      .join('\n')}`;
  }

  if (thirtyDaysRecords.length) {
    msg += `\n\n3️⃣0️⃣ dias para os aniverários:\n${thirtyDaysRecords
      .map((d) => msgTemplate(d))
      .join('\n')}`;
  }

  return msg;
};

module.exports = {
  formatBirthdayMessage,
};
