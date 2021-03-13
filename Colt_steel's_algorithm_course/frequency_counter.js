// 1) write a function called same which accepts two arrays. The function should return true if every
// value in the array has its corresponding value squared in the second array. The frequency of values must be same

function same(arr1, arr2) {
  // if the length not same returns false
  if (arr1.length !== arr2.length) return false;

  // create objects and save the frequency

  let arr1Obj = {};
  let arr2Obj = {};

  for (let key1 of arr1) {
    arr1Obj[key1] = (arr1Obj[key1] || 0) + 1;
  }

  for (let key2 of arr2) {
    arr2Obj[key2] = (arr2Obj[key2] || 0) + 1;
  }

  console.log(arr1Obj, arr2Obj);
  for (let key in arr1Obj) {
    if (!(key ** 2) in arr2Obj) return false;
    if (arr1Obj[key] !== arr2Obj[key ** 2]) return false;
  }

  return true;
}

// 2) Given two strings write a function to determine if the second string is an anagram of  the first. An anagram is a word formed by rearranging the letters of
// another word

function validAnagram(first, second) {
  if (first.length !== second.length) {
    return false;
  }

  const lookup = {};

  for (let i = 0; i < first.length; i++) {
    let letter = first[i];
    // if letter exists, increment, otherwise set to 1
    lookup[letter] ? (lookup[letter] += 1) : (lookup[letter] = 1);
  }

  for (let i = 0; i < second.length; i++) {
    let letter = second[i];
    // can't find letter or letter is zero then it's not an anagram
    if (!lookup[letter]) {
      return false;
    } else {
      lookup[letter] -= 1;
    }
  }

  return true;
}

// 3) Implement a function called, areThereDuplicates which accepts a variable number of arguments, and checks whether
//  there are any duplicates among the arguments passed in

function areThereDuplicates(...arg) {
  let obj = {};
  for (let i = 0; i < arg.length; i++) {
    let el = arg[i];
    obj[el] = (obj[el] || 0) + 1;
    if (obj[el] > 1) return true;
  }
  return false;
}
