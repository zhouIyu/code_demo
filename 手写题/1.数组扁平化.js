function flatten(arr, deep = Infinity) {
  if (deep === 0) return arr.slice()
  return arr.reduce((res, cur) => {
    if (Array.isArray(cur)) {
      res.push(...flatten(cur, deep - 1))
    } else {
      res.push(cur)
    }
    return res
  }, [])
}

const arr = [1, 2, [3, [4, 5]]]

const res = flatten(arr)
console.log(res)