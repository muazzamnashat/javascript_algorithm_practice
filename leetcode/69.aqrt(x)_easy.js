// Given a non-negative integer x, compute and return the square root of x.
// https://leetcode.com/problems/sqrtx/

var mySqrt = function(x) {
    
    if (x < 2) return x;
    let left = 2;
    let right = Math.floor(x/2) ;
    
    while(left <= right)  { 
        let middle = Math.floor(left + ((right - left) / 2))
        let num = middle * middle
        if (num > x) right = middle - 1
        else if (num < x) left = middle + 1
        else return middle
    }
    return right 
};


