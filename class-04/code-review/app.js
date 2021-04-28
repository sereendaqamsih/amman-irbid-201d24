// 'use strict';
// // //truthy and falsy values

// // //0 >>> false
// // //'shihab' >>> true

// // //truthy values
// // //numbers except 0
// // //'0' any string "     "
// // //true

// // //falsy values
// // //0
// // //''
// // //false
// // //null
// // //undefined
// // //NaN >> 3/'a' 'A'/4
// // if ('a') {
// //     console.log('truthy');
// // } else {
// //     console.log('falsy');
// // }

// // for (let i = 1; i <= 10; i++) {
// //     console.log(i);
// // }

// // let userName = prompt('please enter your name?');
// // // 'erada'
// // while (userName === null) {
// //     userName = prompt('please enter your name?');
// // }

// // let i = 1;
// // do {
// //     console.log(i);
// //     i--;
// // } while (i <= 0)

// //arrays
// let user1 = 'shihab';
// let user2 = 'tariq';


// let users = ['shihab', 'tariq', 'shihab', 'saja', 'emad', 'ahmad'];
// users.push('rafeef');
// users[3] = 'samah';
// // for (let i = 0; i < users.length; i++) {
// //     console.log(users[i]);
// // }
// let elementIndex = users.indexOf('shihab');
// // console.log(elementIndex);
// // console.log(users[3]);

// // let cars = [];

// // for (let i = 1; i <= 3; i++) {
// //     let favCar = prompt('please enter your fav car?');
// //     cars.push(favCar);
// // }

// // for (let j = 0; j < cars.length; j++) {
// //     console.log(cars[j]);
// // }

// let things = ['shihab', 'ahmad', 35, 182, ['kia', 2002, 5000]];
// // console.log(things[4][0]);

// // console.log(typeof things);
// // let favFood = prompt('do i like shawarmah?').toLowerCase();
// // let score = 0;
// // if (favFood === 'yes' || favFood === 'y') {
// //     score++;
// // }
let score = 0;
// let food = ['shawarmah', 'mansaf', 'upside down', 'burger'];
// let userAnswer = prompt('what is my fav food?');
// let flag = false;
// for (let i = 0; i < food.length; i++) {
//     if (userAnswer === food[i]) {
//         console.log('yes that\'s one of them');
//         flag = true;
//         break;
//     }
// }
// if (flag === false) {
//     console.log('sorry it is not one of them');
// }
// let myFavNumber = 5;
// let attemptCount = Number(prompt('how many times do you want to guess'));
// for (let attempt = 1; attempt <= attemptCount; attempt++) {
//     let num = parseInt(prompt('can you guess my number'));
//     if (num === myFavNumber) {
//         alert('correct');
//         break;
//     } else if (num > myFavNumber) {
//         alert('too high');
//     } else if (num < myFavNumber) {
//         alert('too low');
//     }
// }
// alert('the correct answer is 5')




let colors = ['blue', 'green', 'black', 'red'];
let flag = false;
for (let attempt = 1; attempt <= 6; attempt++) {
    let userAnswer = prompt('what is my fav color?');
    for (let i = 0; i < colors.length; i++) {
        if (userAnswer === colors[i]) {
            alert('correct');
            score++;
            flag = true;
            break;
        }
    }
    if (flag === true) {
        break;
    }
}


alert(' your score is ', score)