/**
 *
 * @param {string} data
 */
const findChattiest = (data) => {
  // remove newline without user
  const parsedData = data.replace(/\n(?!<)/gm, " ");

  const splitedData = parsedData.split(/(<.*\n?)/gm).filter(Boolean);

  const userWordAmount = splitedData.reduce((prev, item) => {
    const users = item.match(/^<.*>/);
    const messages = item.match(/>\s?(.*)/);
    const [user] = users || [];
    const [_unused, message] = messages || [];
    const messageWords = message?.split(/\s/g) || [];

    // prevent nested iteration, use object instead for faster lookup
    const prevUserMessageLen = prev[user] || 0;

    return {
      ...prev,
      [user]: prevUserMessageLen + messageWords.length,
    };
  }, {});

  const users = Object.keys(userWordAmount).map((user) => ({
    user,
    amount: userWordAmount[user],
  }));
  const result = users
    .sort((prev, curr) => curr.amount - prev.amount)
    .map((item) => item.user);
  return result;
};

module.exports = findChattiest;
