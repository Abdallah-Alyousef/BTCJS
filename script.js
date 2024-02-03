'use strict';

// function calcAge(birthYear) {
//   const age = 2037 - birthYear;
//   function printAge() {
//     let output = `${firstName} You are ${age}, born in ${birthYear}`;
//     console.log(output);

//     if (birthYear >= 1981 && birthYear <= 1996) {
//       var millenial = true;
//       const firstName = 'Steven';
//       const str = `Oh, and you're a millenial ${firstName}`;
//       console.log(str);

//       function add(a, b) {
//         return a + b;
//       }

//       output = 'NEW OUTPUT';
//     }
//     // add(2.3);
//     // console.log(str);
//     console.log(millenial);
//     console.log(output);
//   }
//   printAge();
//   return age;
// }

// const firstName = 'Jonas'; //Global variable
// calcAge(1991);

//Variable hoisting
// console.log(me);
// // console.log(job);
// // console.log(year);

// var me = 'Jonas';
// let job = 'teacher';
// const year = 1991;

// //Function hoisting
// // console.log(addDecl(2, 3));
// // console.log(addArrow(2, 3));
// // console.log(addExpr(2, 3));

// function addDecl(a, b) {
//   return a + b;
// }

// const addExpr = function (a, b) {
//   return a + b;
// };

// var addArrow = (a, b) => a + b;

// //Example

// if (!numProduct) deleteShoppingCart();

// var numProduct = 10;

// function deleteShoppingCart() {
//   console.log('All product deleted');
// }

// var x = 1;
// let y = 2;
// const z = 3;

// console.log(x === window.x);

console.log(this);

const calcAge = function (birthYear) {
  console.log(2037 - birthYear);
  console.log(this);
};
calcAge(1991);

const calcAgeArrow = birthYear => {
  console.log(2037 - birthYear);
  console.log(this);
};
calcAgeArrow(1991);

const jonas = {
  year: 1991,
  calcAge: function () {
    console.log(this);
    console.log(2037 - this.year);
  },
};
jonas.calcAge();

const metilda = {
  year: 2017,
};

metilda.calcAge = jonas.calcAge;

metilda.calcAge();

const f = jonas.calcAge;
