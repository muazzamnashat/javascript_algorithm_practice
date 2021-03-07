// https://leetcode.com/problems/valid-parentheses/

// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.


var isValid = function(s) {
    
    const mapping = {")": "(", "}": "{", "]": "["};
    const stack = [];
        for (let char of s){
            if(char in mapping){
                if(stack[stack.length-1] === mapping[char]) stack.pop()
                else return false
            } else {
                stack.push(char)
            }
        }
        return !stack.length
    };
    
    