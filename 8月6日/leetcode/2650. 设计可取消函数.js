/**
 * @param {Generator} generator
 * @return {[Function, Promise]}
 */
var cancellable = function (generator) {
  let cancel

  let promise = new Promise((resolve, reject) => {
    cancel = () => {
      try {
        resolve(generator.throw('Cancelled').value)
      } catch {
        reject('Cancelled')
      }
    }

    const fn = (val) => {
      try {
        const curr = generator.next(val)
        if (curr.done) {
          resolve(curr.value)
        } else {
          Promise.resolve(curr.value).then(fn).catch(catchFn)
        }
      } catch (e) {
        reject(e)
      }
    }

    const catchFn = (err) => {
      try {
        const curr = generator.throw(err)
        if (curr.done) {
          resolve(curr.value)
        } else {
          Promise.resolve(curr.value).then(fn).catch(catchFn)
        }
      } catch (e) {
        reject(e)
      }
    }

    fn()
  })
  return [cancel, promise]
};


/**
 * function* tasks() {
 *   const val = yield new Promise(resolve => resolve(2 + 2));
 *   yield new Promise(resolve => setTimeout(resolve, 100));
 *   return val + 1;
 * }
 * const [cancel, promise] = cancellable(tasks());
 * setTimeout(cancel, 50);
 * promise.catch(console.log); // logs "Cancelled" at t=50ms
 */