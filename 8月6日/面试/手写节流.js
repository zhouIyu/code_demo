function throttle(fn, delay) {
  let lastTime = 0
  let timer = null
  return function (...args) {
    const now = Date.now()
    if (now > delay + lastTime) {
      lastTime = now
      fn.apply(this, args)
    } else if (!timer) {
      timer = setTimeout(() => {
        timer = null
        fn.apply(this, args)
        lastTime = Date.now()
      }, delay - (now - lastTime))
    }
  }
}