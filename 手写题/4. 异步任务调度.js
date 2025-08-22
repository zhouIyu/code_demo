class AsyncScheduler {
  constructor(limit = 1) {
    this.limit = 1
    this.taskQueen = []
    this.runningCount = 0
  }

  addTask(task) {
    return new Promise((resolve, reject) => {
      this.taskQueen.push({
        task,
        resolve,
        reject
      })
      this.runTask()
    })
  }

  async runTask() {
    while (this.runningCount < this.limit && this.taskQueen.length) {
      const { task, resolve, reject } = this.taskQueen.shift()
      this.runningCount++
      try {
        const result = await task()
        resolve(result)
      } catch (error) {
        reject(error)
      } finally {
        this.runningCount--
        this.runTask()
      }
    }
  }
}