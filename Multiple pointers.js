// multiple pointers patterns

// 1) create a function that accepts a sorted array and counts the unique values in the array

function countUniqueValues(arr) {
  if (arr.length === 0) return 0;
  let left = 0;
  for (let right = 1; right < arr.length; right++) {
    if (arr[left] !== arr[right]) {
      left++;
      arr[left] = arr[right];
    }
  }
  return left + 1;
}
