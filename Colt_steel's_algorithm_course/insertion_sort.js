const insertionSort = (arr) => {
  for (let i = 1; i < arr.length; i++) {
    //   start at the second element of the array
    const currentValue = arr[i];
    // only run this loop if : the current element is less that its previous element / sorting is needed
    for (var j = i - 1; j >= 0 && arr[j] > currentValue; j--) {
      // insert the element
      arr[j + 1] = arr[j];
    }
    // insert the current value to its proper place after sorting is done
    arr[j + 1] = currentValue;
  }
  return arr;
};
