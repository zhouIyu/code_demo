/**
 * @param {Function} fn
 * @param {number} t
 * @return {Function}
 */
var timeLimit = function (fn, t) {

  return async function (...args) {
    const p = new Promise((_, reject) => {
      setTimeout(() => {
        reject('Time Limit Exceeded')
      }, t)
    })
    return await Promise.race([p, fn.apply(this, args)])
  }
};


const limited = timeLimit((t) => new Promise(res => setTimeout(res, t)), 100);
limited(150).catch(console.log)