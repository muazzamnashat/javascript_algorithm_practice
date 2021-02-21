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

// 3) Given two positive integers, find out
// if the two numbers have the same frequency of digits.

function sameFrequency(num1, num2) {
  let strNum1 = num1.toString();
  let strNum2 = num2.toString();
  if (strNum1.length !== strNum2.length) return false;
  let num1Obj = {};
  let num2Obj = {};
  for (let i = 0; i < strNum1.length; i++) {
    num1Obj[strNum1[i]] = (num1Obj[strNum1[i]] || 0) + 1;
    num2Obj[strNum2[i]] = (num2Obj[strNum2[i]] || 0) + 1;
  }
  return JSON.stringify(num2Obj) === JSON.stringify(num1Obj);
}
