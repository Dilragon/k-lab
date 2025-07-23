/*1
let x = 32243;

function reverseNumber(value) {
    let result = '';

    x = x.toString(); // Convert number to string
    for (let i = x.length - 1; i >= 0; i--) {
        result += x[i]; // Reverse the string
    }
}

console.log(reverseNumber(result));
*/

/*2
let str = 'Madam';

function isPolindrome(value) {
    let result = '';

    value = value.toLowerCase(); // Normalize to lowercase
    for (let i = value.length - 1; i >= 0; i--) {
        result += value[i]; // Reverse the string
    }

    if (str.toLowerCase() === result) {
        console.log('is Palindrome');
    } else {
        console.log('is not Palindrome');
    }
}

isPolindrome(str);
*/

/*3
let str = 'dog';

function strCombinations(value) {
    let result = [];
    
    function generateCombination(current, remaining) {
        if (current.length > 0) {
            result.push(current); // Add non-empty combinations
        }
        for (let i = 0; i < remaining.length; i++) {
            generateCombination(current + remaining[i], remaining.slice(i + 1)); // Recursive call to generate combinations
        }
    }

    generateCombination('', value);
    return result;
}

console.log(strCombinations(str));
*/

/*4
let str = 'cat';

function alphabetic(value) {
    value = value.toLowerCase(); // Normalize to lowercase
    return value.split('').sort().join(''); // Split, sort, and join the characters
}

console.log(alphabetic(str));
*/

/*5
let str = 'the quick brown fox';

function capitilize(value) {
    let words = value.split(' '); // Split the string into words

    for (let i = 0; i < words.length; i++) {
        words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1); // Capitalize the first letter of each word
    }

    return words.join(' '); // Join the words back into a string
}

console.log(capitilize(str));
*/

/*6
let str = 'Web Development Tutorial';

function findLongestWord(value) {
    let words = value.split(' '); // Split the string into words
    let longest = '';

    for (let i = 0; i < words.length; i++) {
        if (words[i].length > longest.length) {
            longest = words[i]; // Update longest if current word is longer
        }
    }

    return longest; // Return the longest word found
}

console.log(findLongestWord(str));
*/

/*7
let str = 'The quick brown fox';

function findVowels(value) {
    let vowels = 'aeiou'; // Define vowels
    let count = 0;

    value = value.toLowerCase(); // Normalize to lowercase
    value = value.split(''); // Split the string 
    for (let i = 0; i < value.length; i++) {
        for (let j = 0; j < vowels.length; j++) {
            if (value[i].includes(vowels[j])) {
                count++; // Increment count if the character is a vowel
            } else {
                continue; // Skip to the next iteration if not a vowel
            }
        }
    }

    return count; // Return the total count of vowels
}

console.log(findVowels(str));
*/


/*8
// Didn't understand the task
*/

/*9
let typeValue = 123;

function typeOfValue(value) {
    if (typeof value === 'string') {
        return 'This is a string';
    } else if (typeof value === 'number') {
        return 'This is a number';
    } else if (typeof value === 'boolean') {
        return 'This is a boolean';
    } else if (typeof value === 'object') {
        return 'This is an object';
    } else if (typeof value === 'function') {
        return 'This is a function';
    } else {
        return 'Unknown type';
    }
}

console.log(typeOfValue(typeValue));
*/

/*10
// Didn't understand the task
*/