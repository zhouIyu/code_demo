// 防抖
function debounce(fn, t) {
  let timer = null
  return function (...args) {
    if (timer) {
      clearTimeout(timer)
    }
    timer = setTimeout(() => {
      fn.apply(this, args)
    }, t)
  }
}

// 节流
function throttle(fn, t) {
  let timer = null
  return function (...args) {
    if (timer) {
      return
    }
    const timer = setTimeout(() => {
      clearTimeout(timer)
      timer = null
      fn.apply(this, args)
    }, t)
  }
}


function throttle_2(fn, t) {
  let lastCall = 0
  let timer = null

  return function (...args) {
    const now = Date.now()

    if (now - lastCall > t) {
      fn.apply(this.args)
      lastCall = now
    } else if (timer === null) {
      timer = setTimeout(() => {
        timer = null
        fn.apply(this, args)
        lastCall = Date.now()
      }, t - now + lastCall)
    }
  }
}