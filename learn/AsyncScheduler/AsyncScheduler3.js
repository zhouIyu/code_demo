// 异步任务调度器

class AsyncScheduler {
  constructor({
    concurrency = 1,
    onTaskComplete = () => { },
    onTaskError = () => { }
  } = {}) {
    // 用户配置
    this.concurrency = concurrency
    this.onTaskComplete = onTaskComplete
    this.onTaskError = onTaskError

    this.taskQueue = [] // 任务队列
    this.running = 0

  }

  addTask(task, options = { priority: 0 }, metaData = null) {
    const priority = options.priority
    return new Promise((resolve, reject) => {
      this.taskQueue.push({
        task,
        priority,
        resolve,
        reject,
        metaData
      })
      this.sortTask()
      this.run()
    })
  }

  sortTask() {
    this.taskQueue.sort((a, b) => b.priority - a.priority)
  }

  async run() {
    while (this.running < this.concurrency && this.taskQueue.length) {
      const newTask = this.taskQueue.shift()
      const { task, resolve, reject, metaData } = newTask
      this.running++;

      try {
        const result = await task()
        resolve(result)
        this.onTaskComplete(result, metaData)
      } catch (error) {
        resolve(error)
        this.onTaskError(error, metaData)
      } finally {
        this.running--;
        this.run()
      }
    }
  }
}

// 测试用例
const scheduler = new AsyncScheduler({
  concurrency: 2,
  onTaskComplete: (res, meta) => {
    console.log(`✅ 任务完成: ${meta?.name}`, res)
  },
  onTaskError: (error, meta) => {
    console.log(`❌ 任务失败: ${meta?.name}`, error.message)
  }
})

// 测试用例
const test1 = () => new Promise(resolve => setTimeout(() => resolve('任务1完成'), 1000))
const test2 = () => new Promise(resolve => setTimeout(() => resolve('任务2完成'), 1500))
const test3 = () => new Promise(resolve => setTimeout(() => resolve('任务3完成'), 800))
const test4 = () => new Promise(resolve => setTimeout(() => resolve('任务4完成'), 300))

console.log('开始测试异步任务调度器...')

scheduler.addTask(test1, { priority: 1 }, { name: 'test1' })
scheduler.addTask(test2, { priority: 3 }, { name: 'test2' })
scheduler.addTask(test3, { priority: 2 }, { name: 'test3' })
scheduler.addTask(test4, { priority: 4 }, { name: 'test4' })
// 测试错误处理
const errorTask = () => new Promise((resolve, reject) =>
  setTimeout(() => reject(new Error('任务执行失败')), 500)
)

scheduler.addTask(errorTask, { priority: 0 }, { name: 'errorTask' })
// 测试并发限制
console.log(`当前并发数限制: ${scheduler.concurrency}`)
console.log('预期结果: 1 4 2 3(按优先级排序)')

