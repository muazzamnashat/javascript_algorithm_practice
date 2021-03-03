// Given the array nums consisting of 2n elements in the form [x1,x2,...,xn,y1,y2,...,yn].

// Return the array in the form [x1,y1,x2,y2,...,xn,yn].
// https://leetcode.com/problems/shuffle-the-array/

var shuffle = function(nums, n) {
    let result = []
    for (let i=0; i<n; i++ ){
        result.push(nums[i],nums[n+i])
    }
    return result
};
