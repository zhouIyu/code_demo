function Difference(arr1, arr2) {
  const set2 = new Set(arr2);
  return arr1.filter(item => !set2.has(item));
}

function Difference2(arr1, arr2) {
  const map = new Map();
  for (const item of arr2) {
    map.set(item, true);
  }
  const result = [];
  for (const item of arr1) {
    if (!map.has(item)) {
      result.push(item);
    }
  }
  return result;
}