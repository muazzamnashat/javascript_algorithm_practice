// Given an array of integers nums.
// A pair (i,j) is called good if nums[i] == nums[j] and i < j.
// Return the number of good pairs.

// https://leetcode.com/problems/number-of-good-pairs/

var numIdenticalPairs = function(nums) {
    const map = {}
    let count = 0
    for (const number of nums) {
        if (map[number]) {
            count += map[number];
            map[number] += 1;
        } else {
            map[number] = 1;
        }
    }
    return count
};