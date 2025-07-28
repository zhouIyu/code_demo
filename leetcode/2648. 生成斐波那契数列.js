var fibGenerator = function* () {
  let first = 0
  yield first

  let second = 1
  yield second

  while (true) {
    yield first + second;
    [first, second] = [second, first + second]
  }
};

const fg = fibGenerator()
console.log(fg.next().value)
console.log(fg.next().value)
console.log(fg.next().value)
console.log(fg.next())
console.log(fg.next())
console.log(fg.next())