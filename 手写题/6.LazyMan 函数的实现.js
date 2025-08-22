class LazyMan {
  constructor(name) {
    this.taskQueen = [
      () => new Promise(resolve => {
        console.log(`name is ${name}`)
        resolve()
      })
    ]
    Promise.resolve().then(() => this.runTasks())
  }

  async runTasks() {
    for (let task of this.taskQueen) {
      await task()
    }
  }

  _sleepUtil(delay, isFirst = false) {
    return new Promise(resolve => {
      setTimeout(() => {
        if (isFirst) {
          console.log(`sleep first ${delay} ms`)
        } else {
          console.log(`sleep ${delay} ms`)
        }
        resolve()
      }, delay)
    })
  }

  sleep(delay) {
    this.taskQueen.push(() => this._sleepUtil(delay, false))
    return this
  }

  sleepFirst(delay) {
    this.taskQueen.unshift(() => this._sleepUtil(delay, true))
    return this
  }

  eat(food) {
    this.taskQueen.push(() => new Promise(resolve => {
      console.log(`eat ${food}`)
      resolve()
    }))
    return this
  }
}
// 编写测试
const lazy = new LazyMan('John')
lazy.sleep(1000).eat('lunch').sleepFirst(2000).eat('dinner')