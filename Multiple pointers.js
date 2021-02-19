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

// 2)  Write a function that takes in a non-empty string and that returns a boolean
//   representing whether the string is a palindrome.

function isPalindrome(string) {
  // Write your code here.
  let len = string.length;
  let left = 0;
  let right = len - 1;
  while (left < right) {
    if (string[left] === string[right]) {
      left++;
      right--;
    } else return false;
  }
  return true;
}
