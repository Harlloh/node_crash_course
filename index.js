// const {generateRandomNmber, celciousToFan} = require('./utils')
// console.log(`random numbers ${generateRandomNmber()}`);
// console.log(`cecius to fan ${celciousToFan(0)}`);

import getPosts, {getPostLength}  from "./postController.js";
console.log(getPosts(), getPostLength())