class CanceledPromise {
  constructor(executor) {
    this.isCanceled = false
    this.reject = null

    this.promise = new Promise((resolve, reject) => {
      this.reject = reject
      if (this.isCanceled) {
        return reject(new Error('Promise canceled'))
      }

      executor(
        value => {
          if (!this.isCanceled) {
            resolve(value)
          }
        },
        reason => {
          if (!this.isCanceled) {
            reject(reason)
          }
        }
      )
    })
  }

  then(onFulfilled, onRejected) {
    return this.promise.then(onFulfilled, onRejected)
  }

  catch(onRejected) {
    return this.promise.catch(onRejected)
  }

  finally(onFinally) {
    return this.promise.finally(onFinally)
  }

  cancel(reason = 'Promise Cancel') {
    if (this.isCanceled) return
    this.isCanceled = true
    this.reject(new Error(reason))
  }
}