const findChattiest = require("./findChattiest");

const CHAT_MOCKS = `<user1> this is some chat words
<user2> the sky is blue
This line is still attributed to the user above haha
<user1> more chat from me! 38gad81`;

const result = findChattiest(CHAT_MOCKS);
console.log(result);
