const math = require("mathjs");

// 定义变量和等式
const eq1 = math.parse("x * y = 100");
const eq2 = math.parse("x / y = 1 / 150");

// 解等式
const solution = math.solve([eq1, eq2], ["x", "y"]);

console.log(`池子中 ETH 的数量：${solution.x}`);
console.log(`池子中 DAI 的数量：${solution.y}`);
