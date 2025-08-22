function throttle(fn, delay = 300, immediate = false) {
  let lastTime = 0
  let timer = null
  return function (...args) {
    const context = this
    const now = Date.now()
    if (immediate && now - lastTime > delay) {
      fn.apply(context, args)
      lastTime = now
    } else {
      if (!timer) {
        timer = setTimeout(() => {
          fn.apply(context, args)
          lastTime = Date.now()
          timer = null
        }, delay - (now - lastTime))
      }
    }
  }
}