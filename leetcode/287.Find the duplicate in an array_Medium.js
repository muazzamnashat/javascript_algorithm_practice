// time complexity O(n) ; space complexity O(1)
// leetcode runtime: 84 ms ; Memory: 41.1 mb
var findDuplicate = function (nums) {
  for (let value of nums) {
    const absValue = Math.abs(value);
    if (nums[absValue - 1] < 0) return absValue;
    nums[absValue - 1] *= -1;
  }
  return -1;
};

// time complexity O(n) ; space complexity O(n)
// leetcode runtime: 84 ms ; Memory: 41.9 mb
var findDuplicate = function (nums) {
  let list = {};
  for (let key of nums) {
    list[key] = (list[key] || 0) + 1;
    if (list[key] > 1) return key;
  }
  return -1;
};
