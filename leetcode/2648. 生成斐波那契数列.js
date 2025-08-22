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

function fibGenerator2(n) {
  if (n < 0) return null;
  if (n === 0) return 0;
  if (n === 1) return 1;

  let first = 0;
  let second = 1;

  for (let i = 2; i <= n; i++) {
    const next = first + second;
    first = second;
    second = next;
  }
  
  return second;
}

function fibGenerator3(n) {
  if (n < 0) return null;
  if (n === 0) return 0;
  if (n === 1) return 1;  
  return fibGenerator3(n - 1) + fibGenerator3(n - 2);
}

// 测试
console.log(fibGenerator2(0)) // 0
console.log(fibGenerator2(1)) // 1
console.log(fibGenerator2(2)) // 1
console.log(fibGenerator2(3)) // 2
console.log(fibGenerator2(4)) // 3
console.log(fibGenerator2(5)) // 5


console.log(fibGenerator3(0)) // 0
console.log(fibGenerator3(1)) // 1
console.log(fibGenerator3(2)) // 1
console.log(fibGenerator3(3)) // 2
console.log(fibGenerator3(4)) // 3
console.log(fibGenerator3(5)) // 5
