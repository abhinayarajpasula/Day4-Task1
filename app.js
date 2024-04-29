//Using an anonymous function: Printing odd numbers
const arrnumbers1 = [1, 2, 3, 4, 5, 6, 7];

const oddNumbers = function(array) {
    array.forEach(number => {      
        if(number % 2 !== 0) {
            console.log("oddNumbers using anonymous func: ", number);
        }        
    });
}
oddNumbers(arrnumbers1);

//Using an IIFE: Printing odd numbers
const arrNumbers2 = [1, 2, 3, 4, 5, 6, 7];

(function(array) {
    array.forEach(number => {      
        if(number % 2 !== 0) {
            console.log("oddNumbers using IIFE: ",number);
        }        
    });
})(arrNumbers2);

//Using an anonymous function: Convert all the strings to title caps in a string array
const strings1 = ["learing ", "javascript", "in", "guvi"];

const convertToTitleCase = function(arr) {
    return arr.map(function(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    });
};

console.log("convertToTitleCase using anonymous function: ", convertToTitleCase(strings1));

//Using an IIFE: Convert all the strings to title caps in a string array
const strings2 = ["learing ", "javascript", "in", "guvi"];

(function(arr) {
    const result = arr.map(function(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    });
    console.log("convertToTitleCase using IIFE: ", result);
})(strings2);

//Using an anonymous function: Sum of all numbers in an array
let array1 = [1, 2, 3, 4, 5];

let sum1 = function(arr) {
    let total = 0;
    for (let i = 0; i < arr.length; i++) {
        total += arr[i];
    }
    return total;
};

console.log("Sum of all numbers using anonymous function: ", sum1(array1)); // Output: 15

//Using an IIFE: Sum of all numbers in an array

let array2 = [1, 2, 3, 4, 5];

let sum2 = (function(arr) {
    let total = 0;
    for (let i = 0; i < arr.length; i++) {
        total += arr[i];
    }
    return total;
})(array1);

console.log("Sum of all numbers using IIFE: ", sum2); // Output: 15

//Using an anonymous function: Return all the prime numbers in an array
let numbers1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let primes1 = numbers1.filter(function(num) {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
});

console.log("PrimeNumbers using anonymous function:", primes1); // Output: [2, 3, 5, 7]

//Using an IIFE: Return all the prime numbers in an array
let numbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let primes2 = (function(arr) {
    return arr.filter(function(num) {
        if (num <= 1) return false;
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) return false;
        }
        return true;
    });
})(numbers2);

console.log("PrimeNumbers using IIFE: ", primes2); // Output: [2, 3, 5, 7]

//Using an anonymous function: Return all the palindromes in an array
let array3 = ["madam", "racecar", "hello", "level", "world", "deified"];

// Using an anonymous function
let palindromes3 = function(arr) {
    // Check if arr is an array
    if (!Array.isArray(arr)) {
        return "Input is not an array";
    }

    return arr.filter(str => {
        const reversed = str.split('').reverse().join('');
        return str === reversed;
    });
};

console.log("Palindromes using anonymous function: ", palindromes3(array3)); // Output: ["madam", "racecar", "level", "deified"]

//Using an IIFE: Return all the palindromes in an array
let array4 = ["madam", "racecar", "hello", "level", "world", "deified"];

let palindromes4 = (function(arr) {
    return arr.filter(str => {
        const reversed = str.split('').reverse().join('');
        return str === reversed;
    });
})(array4);

console.log("Palindromes using IIFE: ", palindromes4); // Output: ["madam", "racecar", "level", "deified"]


// Using an anonymous function: Return median of two sorted arrays of the same size.
const findMedian1 = function(arr1, arr2) {
    const mergedArray = [...arr1, ...arr2].sort((a, b) => a - b);
    const length = mergedArray.length;
    const mid = Math.floor(length / 2);
    if (length % 2 === 0) {
        return (mergedArray[mid - 1] + mergedArray[mid]) / 2;
    } else {
        return mergedArray[mid];
    }
};

const arr1 = [1, 3, 5];
const arr2 = [2, 4, 6];

const median1 = findMedian1(arr1, arr2);
console.log("Median of two sorted arrays using anonymous function: ", median1); // Output: 3.5

// Using an IIFE: Return median of two sorted arrays of the same size.
const findMedian2 = (function() {
    return function(arr1, arr2) {
        const mergedArray = [...arr1, ...arr2].sort((a, b) => a - b);
        const length = mergedArray.length;
        const mid = Math.floor(length / 2);
        if (length % 2 === 0) {
            return (mergedArray[mid - 1] + mergedArray[mid]) / 2;
        } else {
            return mergedArray[mid];
        }
    };
})();

const median2 = findMedian2(arr1, arr2);
console.log("Median of two sorted arrays using IIFE: ", median2); // Output: 3.5

//Using an anonymous function: Remove duplicates from an array
const arr = [1, 2, 2, 3, 4, 4, 5];

const uniqueArray1 = function(arr) {
    return arr.filter((value, index, self) => self.indexOf(value) === index);
}(arr);

console.log("Remove duplicates from an arrays using anonymous function: ", uniqueArray1); // Output: [1, 2, 3, 4, 5]

//Using an IIFE: Remove duplicates from an array
const arrList = [1, 2, 2, 3, 4, 4, 5];

const uniqueArray2 = (function(arr) {
    return arr.filter((value, index, self) => self.indexOf(value) === index);
})(arrList);

console.log("Remove duplicates from an arrays using IIFE: ", uniqueArray2); // Output: [1, 2, 3, 4, 5]

//Using an anonymous function: Rotate an array by k times
let rotateArrayByK_anonymous = function(arr, k) {
    for (let i = 0; i < k; i++) {
        let temp = arr.pop(); // remove the last element and store it in temp
        arr.unshift(temp); // add the last element to the beginning of the array
    }
    return arr;
}

// Example usage
let arrayEmp1 = [1, 2, 3, 4, 5];
let k1 = 2;
console.log("Rotate an array by k times using an anonymous function: ", rotateArrayByK_anonymous(arrayEmp1, k1)); // Output: [4, 5, 1, 2, 3]

//Using an IIFE: Rotate an array by k times
let rotateArrayByK_IIFE = (function() {
    return function(arr, k) {
        for (let i = 0; i < k; i++) {
            let temp = arr.pop(); // remove the last element and store it in temp
            arr.unshift(temp); // add the last element to the beginning of the array
        }
        return arr;
    };
})();

// Example usage
let arrayExp2 = [1, 2, 3, 4, 5];
let k2 = 2;
console.log("Rotate an array by k times using IIFE: ", rotateArrayByK_IIFE(arrayExp2, k2)); // Output: [4, 5, 1, 2, 3]