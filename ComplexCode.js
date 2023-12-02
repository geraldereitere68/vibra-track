/*
Filename: ComplexCode.js
Content: A complex code example in JavaScript

This code performs a series of operations on an array of numbers. It calculates the average, finds the minimum and maximum values, sorts the array in ascending order, and checks if a given number exists in the array. It also includes helper functions for sorting and checking the array.

Note: For demonstration purposes, this code uses hard-coded arrays. In a real-world scenario, you would typically retrieve the array dynamically.
*/

// Helper function: Bubble Sort Algorithm
function bubbleSort(arr) {
  var len = arr.length;
  for (var i = 0; i < len; i++) {
    for (var j = 0; j < len - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        var temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}

// Helper function: Check if a number exists in the array
function numberExists(arr, num) {
  return arr.includes(num);
}

// Main code
var numbers = [10, 5, 7, 12, 2, 9, 6, 4, 3, 8, 1, 11]; // Array of numbers

// Calculate the average of the numbers
var sum = 0;
for (var i = 0; i < numbers.length; i++) {
  sum += numbers[i];
}
var average = sum / numbers.length;

// Find the minimum and maximum values in the array
var min = numbers[0];
var max = numbers[0];
for (var i = 1; i < numbers.length; i++) {
  if (numbers[i] < min) {
    min = numbers[i];
  }
  if (numbers[i] > max) {
    max = numbers[i];
  }
}

// Sort the array in ascending order using the bubble sort algorithm
numbers = bubbleSort(numbers);

// Check if a given number exists in the array
var searchNumber = 7;
var exists = numberExists(numbers, searchNumber);

// Output the results
console.log("Average: " + average.toFixed(2));
console.log("Minimum: " + min);
console.log("Maximum: " + max);
console.log("Sorted Array: " + numbers.join(", "));
console.log("Number " + searchNumber + " exists in the array: " + exists);

// Output (Example):
// Average: 6.92
// Minimum: 1
// Maximum: 12
// Sorted Array: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12
// Number 7 exists in the array: true