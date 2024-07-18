// Step 1: Declare a function named isEven that takes a number as a parameter and returns true if the number is even and false otherwise.
function isEven(number) {
    return number % 2 === 0;
}

let number = prompt("Enter a number:");

if (isEven(parseInt(number))) {
    console.log("True");
} else {
    console.log("False");
}


// Step 2: Use a for loop to iterate from 0 to 10. Call the isEven function for each iteration and log the result to the console.
function isEven(number) {
    return number % 2 === 0;
}

for (let i = 0; i <= 10; i++) {
    console.log(`The number ${i} is ${isEven(i) ? "even number" : "odd number"}.`);
}


// Step 3: Declare a function named multiply that takes two numbers as parameters and returns their product.

function multiply(x, y) {
    return x * y;
}

let num1 = prompt("Enter the first number:");
let num2 = prompt("Enter the second number:");

let product = multiply(parseFloat(num1), parseFloat(num2));
console.log(`The product of ${num1} and ${num2} is ${product}.`);


// Step 4: Use a while loop to repeatedly prompt the user to enter two numbers and calculate their product using the multiply function. Log the result to the console. Terminate the loop when the user enters a negative number as any of the inputs.
function multiply(x, y) {
    return x * y;
}

while (true) {
    let num1 = parseFloat(prompt("Enter the first number:"));
    let num2 = parseFloat(prompt("Enter the second number:"));
    
    if (num1 < 0 || num2 < 0) {
        console.log("A negative number was entered. Terminating the loop.");
        break;
    }

    let product = multiply(num1, num2);
    console.log(`The product of ${num1} and ${num2} is ${product}.`);
}


// Step 5: Declare a function named reverseString that takes a string as a parameter and returns the reversed version of the string.
function reverseString(str) {
    return str.split('').reverse().join('');
}

let inputString = prompt("Enter a string:");
let reversedString = reverseString(inputString);
console.log(`The reversed string is: ${reversedString}`);


// Step 6: Call the reverseString function with the string 'hello' and log the result to the console.

let result = reverseString('hello');
console.log(`The reversed string is: ${result}`);


// Step 7: Declare a function named countVowels that takes a string as a parameter and returns the number of vowels in the string.
function countVowels(str) {
    const vowels = 'aeiouAEIOU';
    let count = 0;

    for (let char of str) {
        if (vowels.includes(char)) {
            count++;
        }
    }

    return count;
}


// Step 8: Call the countVowels function with the string 'JavaScript' and log the result to the console.

let result0 = countVowels('JavaScript');
console.log(`The number of vowels in 'JavaScript' is: ${result0}`);

// Step 9: Declare a function named findMax that takes an array of numbers as a parameter and returns the maximum value in the array.
function findMax(arr) {
    return Math.max(...arr);
}

// Step 10: Call the findMax function with the array [4, 9, 2, 7, 5] and log the result to the console.

let result1 = findMax([4, 9, 2, 7, 5]);
console.log(`The maximum value in the array is: ${result1}`);

// Step 11: Declare a function named calculateFactorial that takes a number as a parameter and returns its factorial value.
function calculateFactorial(n) {
    if (n < 0) return undefined; // Factorial is not defined for negative numbers
    if (n === 0 || n === 1) return 1; // Factorial of 0 or 1 is 1

    let factorial = 1;
    for (let i = 2; i <= n; i++) {
        factorial *= i;
    }

    return factorial;
}

// Step 12: Call the calculateFactorial function with the number 5 and log the result to the console.
 
let result2 = calculateFactorial(5);
console.log(`The factorial of 5 is: ${result2}`);

// Step 13: Declare a function named isPalindrome that takes a string as a parameter and returns true if the string is a palindrome and false otherwise.
 function isPalindrome(str) { 
 const reversed = str.split('').reverse().join(''); return str === reversed; 
 }

// Step 14: Call the isPalindrome function with the string 'level' and log the result to the console.

let palindromeResult = isPalindrome('level'); console.log(`Is 'level' a palindrome? ${palindromeResult}`); 

// Step 15: Declare a function named sumArray that takes an array of numbers as a parameter and returns the sum of all the numbers in the array.

function sumArray(arr) { 
return arr.reduce((sum, num) => sum + num, 0); 
}
 
// Step 16: Call the sumArray function with the array [1, 2, 3, 4, 5] and log the result to the console.
let sumResult = sumArray([1, 2, 3, 4, 5]); console.log(`The sum of the array is: ${sumResult}`); 

// Step 17: Declare a function named capitalizeFirstLetter that takes a string as a parameter and returns the string with the first letter capitalized.
function capitalizeFirstLetter(str) {
 return str.charAt(0).toUpperCase() + str.slice(1);
  }


// Step 18: Call the capitalizeFirstLetter function with the string 'javascript' and log the result to the console.
let capitalizedResult = capitalizeFirstLetter('javascript'); console.log(`Capitalized string: ${capitalizedResult}`); 

// Step 19: Declare a function named filterEvenNumbers that takes an array of numbers as a parameter and returns a new array with only the even numbers.
function filterEvenNumbers(arr) {
 return arr.filter(num => num % 2 === 0); 
 }

// Step 20: Call the filterEvenNumbers function with the array [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] and log the result to the console.

let evenNumbersResult = filterEvenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]); 
console.log(`Even numbers: ${evenNumbersResult}`);
