// 引入第三方库jquery
import $ from 'jquery';

console.log($);

// 使用es6规范定义(calc.js)
const add = (x, y) => x + y;
const mul = (x, y) => x * y;

export {
  add,
  mul,
};
