/*
LeetCode
20. Valid Parentheses
Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Every close bracket has a corresponding open bracket of the same type.

Example 1:

Input: s = "()"
Output: true
Example 2:

Input: s = "()[]{}"
Output: true
Example 3:

Input: s = "(]"
Output: false
*/

var isValid = function(s) {
    const stack = []
    const bracketsMap = {
        '(' : ')',
        '[' : ']',
        '{' : '}',
    }
 
   for (let char of s) {
        if (bracketsMap[char]) {
            stack.push(char);
        } else {
            const lastOpeningBracket = stack.pop();
            if (bracketsMap[lastOpeningBracket] !== char) {
                return false;
            }
        }
    }

    return stack.length === 0;
};