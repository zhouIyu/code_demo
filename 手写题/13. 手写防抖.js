function debounce(fn, delay = 300, immediate = false) {
  let timer = null
  let isImmediate = false

  const later = () => {
    if (!immediate) {
      fn.apply(this, arguments)
    }
    isImmediate = false
    timer = null
  }

  const debounced = (...args) => {
    const context = this
    if (immediate && !isImmediate) {
      fn.apply(context, args)
      isImmediate = true
    }
    timer && clearTimeout(timer)
    timer = setTimeout(later, delay)
  }

  debounced.cancel = () => {
    if (timer) {
      clearTimeout(timer)
      timer = null
    }
    isImmediate = false
  }
  return debounced
}