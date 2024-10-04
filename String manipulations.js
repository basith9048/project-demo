// String Manipulation Functions

// Function to reverse a string
function reverseString(str) {
    return str.split('').reverse().join('');
}

// Function to change the case of a string
function changeCase(str) {
    return str
        .split('')
        .map(char => char === char.toUpperCase() ? char.toLowerCase() : char.toUpperCase())
        .join('');
}

// Function to replace certain characters in a string
function replaceCharacters(str, charToReplace, replacementChar) {
    return str.split(charToReplace).join(replacementChar);
}

// Function to check if a string is a palindrome
function isPalindrome(str) {
    const reversed = reverseString(str);
    return str === reversed;
}

// Testing the functions
const originalString = "Hello, World!";
console.log("Original String:", originalString);

const reversed = reverseString(originalString);
console.log("Reversed String:", reversed);

const caseChanged = changeCase(originalString);
console.log("Case Changed String:", caseChanged);

const replacedString = replaceCharacters(originalString, 'o', '0');
console.log("Replaced Characters String:", replacedString);

const palindromeTest = "madam";
console.log(`Is "${palindromeTest}" a palindrome?`, isPalindrome(palindromeTest));