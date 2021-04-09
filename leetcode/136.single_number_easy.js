// https://leetcode.com/problems/single-number/

// Given a non-empty array of integers nums, every element appears twice except for one.
// Find that single one.

function singleNumber(nums) {
  let map = {};
  for (let num of nums) {
    map[num] = (map[num] || 0) + 1;
  }
  for (let key in map) {
    if (map[key] === 1) return key;
  }
}
