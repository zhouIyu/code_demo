function asyncToGenerator(generatorFunc) {
  return function (...args) {
    const gen = generatorFunc(...args)
    return new Promise((resolve, reject) => {
      function step(nextFn) {
        let result
        try {
          result = nextFn()
        } catch (e) {
          reject(e)
        }
        if (result.done) {
          return resolve(result.value)
        }
        Promise.resolve(result.value).then(
          value => step(() => gen.next(value)),
          reason => step(() => gen.throw(reason))
        )
      }
      step(() => gen.next())
    })
  }
}

// 使用示例：
const asyncFn = asyncToGenerator(function* () {
  const a = yield Promise.resolve(1);
  const b = yield Promise.resolve(2);
  return a + b;
});

asyncFn().then(res => console.log(res)); // 3