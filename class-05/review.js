'use strict';
/*
you have this an array of these numbers [100,20,33,45,44,37,10,2,3,5,15,12,31,32,88,94,62,63,77,66,27,1,7,8,9]
write a function that return or console.log   'number of even numbers is ' and count the even numbers. if you want to count the odd number as well do the same return. after you finish it slack me with the answer in private message
example of the output
number of even numbers is  12
number of odd numbers is 13
*/
// countEvenOdd();
function countEvenOdd() {
    let numbers = [100, 20, 33, 45, 44, 37, 10, 2, 3, 5, 15, 12, 31, 32, 88, 94, 61, 63, 77, 66, 27, 1, 7, 8, 9];
    let evenCount = 0;
    let oddCount = 0;
    for (let i = 0; i < numbers.length; i++) {
        //check if odd or even
        if (numbers[i] % 2 === 0) {
            evenCount++;
        } else {
            oddCount++;
        }
    }
    // return [evenCount, oddCount];
    console.log('number of even numbers is ', evenCount);
    console.log('number of odd numbers is ', oddCount);
}

// console.log('number of even numbers is ', countEvenOdd()[0]);
// console.log('number of odd numbers is ', countEvenOdd()[1]);


let getEvenOdd = function () {
    let numbers = [100, 20, 33, 45, 44, 37, 10, 2, 3, 5, 15, 12, 31, 32, 88, 94, 61, 63, 77, 66, 27, 1, 7, 8, 9];
    let evenCount = 0;
    let oddCount = 0;
    for (let i = 0; i < numbers.length; i++) {
        //check if odd or even
        if (numbers[i] % 2 === 0) {
            evenCount++;
        } else {
            oddCount++;
        }
    }

    // return [evenCount, oddCount];
    console.log('number of even numbers is ', evenCount);
    console.log('number of odd numbers is ', oddCount);
}

// console.log(evenCount);
getEvenOdd();