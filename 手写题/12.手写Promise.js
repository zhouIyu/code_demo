class MyPromise {
  constructor(executor) {
    this.state = 'pending'
    this.value = undefined
    this.reason = undefined
    this.onFulFillQueen = []
    this.onRejectedQueen = []

    const resolve = (value) => {
      if (this.state === 'pending') {
        this.state = 'fulfilled'
        this.value = value
        this.onFulFillQueen.forEach(fn => fn(value))
      }
    }

    const reject = (reason) => {
      if (this.state === 'pending') {
        this.state = 'rejected'
        this.reason = reason
        this.onRejectedQueen.forEach(fn => fn(reason))
      }
    }

    try {
      executor(resolve, reject)
    } catch (e) {
      reject(e)
    }
  }

  then(onFulFilled, onRejected) {
    onFulFilled = typeof onFulFilled === 'function' ? onFulFilled : value => value
    onRejected = typeof onRejected === 'function' ? onRejected : reason => { throw reason }

    return new MyPromise((resolve, reject) => {
      const handleFulFilled = () => {
        try {
          const result = onFulFilled(this.value)
          resolve(result)
        } catch (e) {
          reject(e)
        }
      }

      const handleRejected = () => {
        try {
          const result = onRejected(this.reason)
          resolve(result)
        } catch (e) {
          reject(e)
        }
      }

      if (this.state === 'fulfilled') {
        handleFulFilled()
      } else if (this.state === 'rejected') {
        handleRejected()
      } else {
        this.onFulFillQueen.push(handleFulFilled)
        this.onRejectedQueen.push(handleRejected)
      }
    })

  }

  catch(onRejected) {
    return this.then(null, onRejected)
  }

  finally(fn) {
    return this.then(
      value => MyPromise.resolve(fn()).then(() => value),
      reason => MyPromise.resolve(fn()).then(() => { throw reason })
    )
  }

  static resolve(value) {
    return new MyPromise(resolve => resolve(value))
  }

  static reject(reason) {
    return new MyPromise((_, reject) => reject(reason))
  }

  static all(promises) {
    return new MyPromise((resolve, reject) => {
      if (promises.length === 0) {
        return resolve([])
      }
      let result = []
      let count = 0
      promises.forEach((promise, index) => {
        MyPromise.resolve(promise).then(value => {
          result[index] = value
          count++
          if (count === promises.length) {
            resolve(result)
          }
        }).catch((reason) => {
          reject(reason)
        })
      })
    })
  }

  static allSettled(promises) {
    return new MyPromise((resolve) => {
      if (promises.length === 0) {
        return resolve([])
      }
      let result = []
      let count = 0
      function checkAllCompleted() {
        count++
        if (count === promises.length) {
          resolve(result)
        }
      }

      promises.forEach((promise, index) => {
        MyPromise.resolve(promise).then(
          value => {
            result[index] = {
              state: 'fulfilled',
              value
            }
            checkAllCompleted()
          },
          reason => {
            result[index] = {
              state: 'rejected',
              reason
            }
            checkAllCompleted()
          }
        )
      })
    })
  }

  static any(promises) {
    return new MyPromise((resolve, reject) => {
      let errors = []
      let isResolved = false
      promises.forEach((promise, index) => {
        MyPromise.resolve(promise).then(
          value => {
            if (!isResolved) {
              isResolved = true
              resolve(value)
            }
          },
          error => {
            if (!isResolved) {
              errors[index] = error
              if (errors.length === promises.length) {
                reject(new AggregateError(errors, 'All promises were rejected'))
              }
            }
          }
        )
      })
    })
  }

  static race(promises) {
    return new MyPromise((resolve, reject) => {
      promises.forEach(promise => {
        MyPromise.resolve(promise).then(value => {
          resolve(value)
        }).catch(reason => {
          reject(reason)
        })
      })
    })
  }
}