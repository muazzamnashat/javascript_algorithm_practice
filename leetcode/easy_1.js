// Given two strings s and t, check if s is a subsequence of t.

// A subsequence of a string is a new string that is formed from the original string by deleting some (can be none) of
// the characters without disturbing the relative positions of the remaining characters. (i.e., "ace" is a subsequence of "abcde" while "aec" is not).

var isSubsequence = function (s, t) {
  let currentIdx = 0;
  for (let i = 0; i < t.length; i++) {
    if (currentIdx === s.length) break;
    if (s[currentIdx] === t[i]) currentIdx += 1;
  }
  return currentIdx === s.length;
};
