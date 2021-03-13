// implement selection sort in JS

const selectionSort = (arr) => {
  const swap = (array, idx1, idx2) => {
    [array[idx1], array[idx2]] = [array[idx2], array[idx1]];
  };
  for (let i = 0; i < arr.length; i++) {
    let minIdx = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minIdx]) minIdx = j;
    }
    if (minIdx !== i) swap(arr, minIdx, i);
  }
  return arr;
};

console.log(selectionSort([1, 4, 2, 7, 9, 5]));
