const { Random } = require("mockjs");

const a =
  "#" +
  Random.integer(180, 255).toString(16) +
  Random.integer(140, 255).toString(16) +
  Random.integer(120, 220).toString(16);

const imageUrl=Random.image('140x140', a, '同学'+ Random.csentence(2))

console.log(imageUrl)
