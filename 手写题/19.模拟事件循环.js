class EventLoop {
  constructor() {
    this.microTaskQueue = []
    this.macroTaskQueue = []
    this.running = false
  }

  addMicroTask(task) {
    this.microTaskQueue.push(task)
    this.run()
  }

  addMacroTask(task) {
    this.macroTaskQueue.push(task)
    this.run()
  }

  run() {
    if (this.running) return
    this.running = true
    while (this.macroTaskQueue.length) {
      const macroTask = this.macroTaskQueue.shift()
      try {
        macroTask()
      } catch (e) {
        console.error('宏任务错误:', e)
      }
      this.flushMicroTasks()
    }
    this.flushMicroTasks()
    this.running = false
  }

  flushMicroTasks() {
    while (this.microTaskQueue.length) {
      const microTask = this.microTaskQueue.shift()
      try {
        microTask()
      } catch (e) {
        console.error('微任务错误:', e)
      }
    }
  }
}

// 测试
const loop = new EventLoop();

// 添加宏任务（如 setTimeout）
loop.addMacroTask(() => {
  console.log('Macro task 1');
  loop.addMicroTask(() => console.log('Micro task 1 (from macro 1)'));
});

// 添加微任务（如 Promise.then）
loop.addMicroTask(() => console.log('Micro task 2'));

// 添加宏任务（如 UI 事件回调）
loop.addMacroTask(() => {
  console.log('Macro task 3');
  loop.addMicroTask(() => console.log('Micro task 3 (from macro 3)'));
});
