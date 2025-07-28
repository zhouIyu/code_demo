function promiseAll(functions) {
  return new Promise((resolve, reject) => {
    if (functions.length === 0) {
      return resolve([])
    }
    const results = []
    let completeCount = 0
    const total = functions.length

    functions.forEach((fn, index) => {
      const promise = typeof fn === 'function' ? Promise.resolve(fn()) : Promise.resolve(fn)
      promise
        .then(res => {
          console.log(res)
          results[index] = res
          completeCount++
          if (total === completeCount) {
            resolve(results)
          }
        }).catch(err => {
          reject(err)
        })
    })
  })
}

console.log(promiseAll([() => new Promise(resolve => resolve(1)), 2]))