'use strict';
// let grades = [100, 90, 85, 20, 45, 65];
// console.log('array before ', grades);
// let gradesLength = grades.length;
// let shihab = grades[1];//90
// grades[3] = 75;
// let item = grades.indexOf(100);
// console.log(item);
// grades.push(100)
// for (let index = 0; index < grades.length; index++) {
//     // grades[i] += 5;
//     grades[index] = grades[index] + 5;
// }
// console.log('array after ', grades);


// let userName = prompt('please enter your name');
// let userAge = prompt('please enter your age?');
function greeting(a, b) {
    let info = [a, b];
    return info;
}
// document.write('welcome ' + greeting(userName, userAge)[0]);
let getAge = function () {
    let userAge = prompt('please enter your age?');
    return userAge;
}
// document.write('your age is ', getAge());
let userName = 'shihab';

function calcGrades() {
    let mark1 = 10;
    let mark2 = 15;
    return mark1 + mark2;
}

// console.log(mark1);

function addMarks() {
    let totalGrade = calcGrades();//25
    console.log(totalGrade);
}