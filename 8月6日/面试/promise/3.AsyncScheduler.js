class AsyncScheduler {
  constructor(limit = 1) {
    this.limit = 1
    this.taskQueue = []
    this.running = 0
  }

  addTask(task) {
    return new Promise((resolve, reject) => {
      this.taskQueue.push(() => {
        task().then(resolve).catch(reject)
      })

      this.run()
    })
  }

  run() {
    while (this.running < this.limit && this.taskQueue.length) {
      const task = this.taskQueue.shift()
      this.running++
      task().finally(() => {
        this.running--
        this.run()
      })
    }
  }
}