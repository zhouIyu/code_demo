class CancelPromise {
  constructor(executor) {
    this.reject = null
    this.isCanceled = false
    this.promise = new Promise((resolve, reject) => {
      this.reject = reject
      if (this.isCanceled) {
        return reject(new Error('Promise Canceled'))
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

  finally(fn) {
    return this.promise.finally(fn)
  }

  cancel(reason = 'Promise Canceled') {
    if (!this.isCanceled) {
      this.isCanceled = true
      this.reject(new Error(reason))
    }
  }
}