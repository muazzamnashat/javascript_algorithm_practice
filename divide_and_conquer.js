// given a sorted array of integers write a function that accepts a value and returns
// the index where the value is located. If not found return -1

function search(array, item) {
  let maxIdx = array.length - 1;
  let middleIdx = Math.floor(maxIdx / 2);
  while (middleIdx < maxIdx) {
    if (array[middleIdx] === item) return middleIdx;
    if (array[middleIdx] < item)
      middleIdx = Math.floor((maxIdx + middleIdx) / 2);
    else if (array[middleIdx] > item) middleIdx = Math.floor(middleIdx / 2);
  }
  return -1;
}

console.log(search([1, 2, 3, 4, 5, 6, 7], 1));
