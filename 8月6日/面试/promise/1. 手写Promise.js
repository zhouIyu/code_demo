class MPromise {
  constructor(executor) {
    this.state = 'pending'
    this.value = undefined
    this.reason = undefined
    this.onFulfilledCallbacks = []
    this.onRejectCallbacks = []

    const resolve = (value) => {
      if (this.state === 'pending') {
        this.state = 'fulfilled'
        this.value = value
        this.onFulfilledCallbacks.forEach(fn => fn())
      }
    }

    const reject = (reason) => {
      if (this.state === 'pending') {
        this.state = 'rejected'
        this.reason = reason
        this.onRejectCallbacks.forEach(fn => fn())
      }
    }

    try {
      executor(resolve, reject)
    } catch (err) {
      reject(err)
    }
  }

  then(onFulfilled, onRejected) {
    return new MPromise((resolve, reject) => {
      if (this.state === 'fulfilled') {
        setTimeout(() => {
          try {
            const res = onFulfilled ? onFulfilled(this.value) : this.value
            resolve(res)
          } catch (e) {
            reject(e)
          }
        })
      } else if (this.state === 'rejected') {
        setTimeout(() => {
          try {
            const res = onRejected ? onRejected(this.reason) : this.reason
            reject(res)
          } catch (e) {
            reject(e)
          }
        })
      } else if (this.state === 'pending') {
        this.onFulfilledCallbacks.push(() => {
          setTimeout(() => {
            try {
              const x = onFulfilled ? onFulfilled(this.value) : this.value;
              resolve(x);
            } catch (e) {
              reject(e);
            }
          });
        });
        this.onRejectedCallbacks.push(() => {
          setTimeout(() => {
            try {
              const x = onRejected ? onRejected(this.reason) : this.reason;
              reject(x);
            } catch (e) {
              reject(e);
            }
          });
        });
      }
    })
  }

  catch(onRejected) {
    return this.then(null, onRejected)
  }

  finally(cb) {
    return this.then(
      value => MPromise.resolve(cb()).then(() => value),
      reason => MPromise.resolve(cb()).then(() => { throw reason })
    )
  }

  static resolve(value) {
    if (value instanceof MPromise) return value
    return new MPromise(resolve => resolve(value))
  }

  static reject(reason) {
    return new MPromise((_, reject) => reject(reason))
  }

  static all(promises) {
    return new MPromise((resolve, reject) => {
      if (promises.length === 0) {
        return resolve([])
      }
      let results = []
      let count = 0
      promises.forEach((p, i) => {
        MPromise.resolve(p).then(val => {
          results[i] = val
          count++
          if (count === promises.length) {
            resolve(results)
          }
        }, reject)
      })
    })
  }

  static race(promises) {
    return new MPromise((resolve, reject) => {
      promises.forEach(p => {
        MPromise.resolve(p).then(resolve, reject)
      })
    })
  }
}

module.exports = MPromise

