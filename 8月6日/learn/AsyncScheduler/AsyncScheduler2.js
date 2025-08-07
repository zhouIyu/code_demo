// 异步任务调度器

class AsyncScheduler {
  constructor(concurrency = 1) {
    this.taskQueue = [] // 任务队列
    this.running = 0
    this.concurrency = concurrency
  }

  addTask(task, options = { priority: 0 }) {
    const priority = options.priority
    return new Promise((resolve, reject) => {
      this.taskQueue.push({
        task,
        priority,
        resolve,
        reject
      })
      this.sortTask()
      this.run()
    })
  }

  sortTask() {
    this.taskQueue.sort((a, b) => b.priority - a.priority)
    console.log(this.taskQueue)
  }

  async run() {
    while (this.running < this.concurrency && this.taskQueue.length) {
      const newTask = this.taskQueue.shift()
      const { task, resolve, reject } = newTask
      this.running++;

      try {
        const result = await task()
        resolve(result)
      } catch (error) {
        reject(error)
      } finally {
        this.running--;
        this.run()
      }

    }
  }
}

// 测试用例
const scheduler = new AsyncScheduler(2)

// 测试用例
const test1 = () => new Promise(resolve => setTimeout(() => resolve('任务1完成'), 1000))
const test2 = () => new Promise(resolve => setTimeout(() => resolve('任务2完成'), 1500))
const test3 = () => new Promise(resolve => setTimeout(() => resolve('任务3完成'), 800))
const test4 = () => new Promise(resolve => setTimeout(() => resolve('任务4完成'), 300))

console.log('开始测试异步任务调度器...')

// 添加任务并记录开始时间
const startTime = Date.now()

scheduler.addTask(test1, { priority: 1 }).then(result => {
  console.log(`${result} - 耗时: ${Date.now() - startTime}ms`)
})

scheduler.addTask(test2, { priority: 3 }).then(result => {
  console.log(`${result} - 耗时: ${Date.now() - startTime}ms`)
})

scheduler.addTask(test3, { priority: 2 }).then(result => {
  console.log(`${result} - 耗时: ${Date.now() - startTime}ms`)
})

scheduler.addTask(test4, { priority: 4 }).then(result => {
  console.log(`${result} - 耗时: ${Date.now() - startTime}ms`)
})

// 测试错误处理
const errorTask = () => new Promise((resolve, reject) =>
  setTimeout(() => reject(new Error('任务执行失败')), 200)
)

scheduler.addTask(errorTask, { priority: 0 }).catch(error => {
  console.log(`错误处理测试: ${error.message}`)
})

// 测试并发限制
console.log(`当前并发数限制: ${scheduler.concurrency}`)
console.log('预期结果: 1 4 2 3 (按优先级排序)')

