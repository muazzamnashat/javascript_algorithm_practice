// https://leetcode.com/problems/longest-common-prefix/
// Write a function to find the longest common prefix string amongst an array of strings.
// If there is no common prefix, return an empty string "".

var longestCommonPrefix = function (strs) {
  if (!strs.length) return '';

  let longestPrefix = '';
  let firstWord = strs[0];

  for (let i = 0; i < firstWord.length; i++) {
    let firstWordChar = firstWord[i];
    for (let j = 1; j < strs.length; j++) {
      let nextWord = strs[j];
      let nextWordChar = nextWord[i];
      if (firstWordChar !== nextWordChar || !nextWordChar) return longestPrefix;
    }
    longestPrefix += firstWordChar;
  }
  return longestPrefix;
};

var longestCommonPrefix = function (strs) {
  if (!strs.length) return '';
  let prefix = strs[0];

  for (let i = 1; i < strs.length; i++) {
    let currentStr = strs[i];
    while (currentStr.indexOf(prefix) !== 0) {
      prefix = prefix.substr(0, prefix.length - 1);
    }
    if (!currentStr.includes(prefix)) return '';
  }

  return prefix;
};
