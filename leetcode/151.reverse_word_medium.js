// https://leetcode.com/problems/reverse-words-in-a-string/

var reverseWords = function (s) {
  const newList = s.split(' ').filter((word) => {
    if (word !== ' ' || word !== '  ') return word;
  });
  return newList.reverse().join(' ');
};
