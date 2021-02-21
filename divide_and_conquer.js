// given a sorted array of integers write a function that accepts a value and returns
// the index where the value is located. If not found return -1

function search(array, item) {
  let minIdx = 0;
  let maxIdx = array.length - 1;

  while (minIdx <= maxIdx) {
    let middleIdx = Math.floor((minIdx + maxIdx) / 2);
    let currentElement = array[middleIdx];

    if (currentElement < item) minIdx = middleIdx + 1;
    else if (currentElement > item) maxIdx = middleIdx - 1;
    else return middleIdx;
  }
  return -1;
}

console.log(search([1, 2, 3, 4, 5, 6, 7], 3));
