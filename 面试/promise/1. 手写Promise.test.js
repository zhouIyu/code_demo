const MPromise = require('./1. 手写Promise');

// 基本用法
new MPromise((resolve, reject) => {
  setTimeout(() => resolve('success'), 100);
}).then(res => {
  console.log('then:', res); // 输出 then: success
});

// reject 测试
new MPromise((resolve, reject) => {
  setTimeout(() => reject('fail'), 100);
}).catch(err => {
  console.log('catch:', err); // 输出 catch: fail
});

// finally 测试
new MPromise((resolve) => {
  setTimeout(() => resolve('done'), 100);
}).finally(() => {
  console.log('finally called'); // 输出 finally called
});

// 链式调用
new MPromise((resolve) => {
  resolve(1);
}).then(val => {
  return val + 1;
}).then(val => {
  console.log('chain:', val); // 输出 chain: 2
});

// MPromise.resolve
MPromise.resolve('static resolve').then(val => {
  console.log('static:', val); // 输出 static: static resolve
});

// MPromise.reject
MPromise.reject('static reject').catch(err => {
  console.log('static:', err); // 输出 static: static reject
});

// MPromise.all
MPromise.all([
  MPromise.resolve(1),
  new MPromise(resolve => setTimeout(() => resolve(2), 50)),
  3
]).then(res => {
  console.log('all:', res); // 输出 all: [1,2,3]
});

// MPromise.race
MPromise.race([
  new MPromise(resolve => setTimeout(() => resolve('first'), 30)),
  new MPromise(resolve => setTimeout(() => resolve('second'), 50))
]).then(res => {
  console.log('race:', res); // 输出 race: first
});