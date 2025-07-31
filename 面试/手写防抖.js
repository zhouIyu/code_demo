function debounce(fn, delay) {
  let timer = null
  return function (...args) {
    if (timer) {
      clearTimeout(timer)
    }
    timer = setTimeout(() => {
      timer = null
      fn.apply(this, args)
    }, delay)
  }
}

// 用 ES6 + 语法实现一个 “防抖函数”，要求支持立即执行、返回值获取，并且能手动取消防抖。请说明实现思路，以及和节流的核心区别。

function debounce2(fn, delay, immediate = false) {
  let timer = null
  let result
  const debounced = function (...args) {
    const context = this
    if (timer) clearTimeout(timer)
    if (immediate) {
      const callNow = !timer
      timer = setTimeout(() => {
        timer = null
      }, delay)
      if (callNow) {
        result = fn.apply(context, args)
        return result
      }
    } else {
      timer = setTimeout(() => {
        result = fn.apply(useContext, args)
        timer = null
      }, delay)
    }
    return immediate ? result : undefined
  }

  debounced.cancel = function () {
    if (timer) {
      clearTimeout(timer)
      timer = null
      result = undefined
    }
  }

  return debounced
}

// 编写测试代码
const fn = debounce2((x) => x * 2, 100, true);
console.log(fn(5))
setTimeout(() => {
  console.log(fn(10))
}, 50);
setTimeout(() => {
  console.log(fn(20))
}, 150);
setTimeout(() => {
  fn.cancel(); // 取消防抖
  console.log(fn(30))
}, 250);