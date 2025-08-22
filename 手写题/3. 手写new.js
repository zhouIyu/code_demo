function myNew(constructor, ...args) {
  if (typeof constructor !== 'function') {
    throw new TypeError('constructor 不是函数')
  }

  const newObj = Object.create(constructor.prototype)

  const result = constructor.apply(newObj, args)
  console.log(result)
  console.log((typeof result === 'object' && result !== null) || typeof result === 'function')
  console.log(newObj)
  return (typeof result === 'object' && result !== null) || typeof result === 'function'
    ? result : newObj
}

function Person(name, age) {
  this.name = name
  this.age = age
}

const person = myNew(Person, 'Alice', 18)
console.log(person)

function add(a, b) {
  return a + b
}

const addInstance = myNew(add, 1, 2)
console.log(addInstance)

console.log(new add(1,2))