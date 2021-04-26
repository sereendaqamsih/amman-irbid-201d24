'use strict';
// write a comment on js

/*this is a 
multi line comments
*/
//data type
// string '' ""
// let userName = 'shihab';
// let age = '35';
// let tag = '<h3>hello </h3>';

// //number
// let age = 35;
// let grade = 95.5;
// let temp = -10;

// //boolean
// let MloveKarshat = true;
// let FloveKarshat = false;

// console.log(typeof temp)

// let age = parseInt(prompt('what\'s your age'));

// let result = confirm('do you like js?');
// console.log(result)

//input
// let userSlary = prompt('enter your salary?');

//processing 
// T && T >> T
// F || F >> F
// if (userSlary >= 2000 || result == true) {
//     //output
//     console.log('sa7teen');
// } else {
//     //output
//     console.log('you need another job');
// }


// let userType = prompt('please enter your type user or admin').toUpperCase();

// alert(userType);
// //switch
// switch (userType) {
//     case 'USER':
//         console.log('sorry you can\'t access this file');
//         break;
//     case 'ADMIN':
//         console.log('ok you can access the file');
//         break;
//     default:
//         console.log('we don\'t have this userType ');
//         break;

// }

let carType = prompt('please enter your car type bmw , kia ,ford').toLowerCase();
switch (carType) {
    case 'bmw':
        document.write('<img src="https://www.bmwgroup.com/content/dam/grpw/websites/bmwgroup_com/home/i4_finedata_rgb_A0310417_720x720.jpg.grp-transform/small/i4_finedata_rgb_A0310417_720x720.jpg" alt="bmw"');
        break;
    case 'kia':
        document.write('<img src="https://wallpaperaccess.com/full/1642062.jpg" alt="kia"');
        break;
    case 'ford':
        document.write('<img src="https://c4ddownload.com/wp-content/uploads/Ford-Raptor-3D-Model-540x411.jpg" alt="ford"');
        break;
    default:
        console.log('we don\'t have this car type ');
        break;
}