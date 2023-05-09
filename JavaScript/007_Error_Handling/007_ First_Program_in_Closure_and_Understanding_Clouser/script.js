// //Scope
// let score = 4;
// function one() {
//    let score = 0;
//    console.log(score);
// }

// function two() {
//    let score = 3;
//    console.log(score);
// }

// function three() {
//    console.log(score);
// }

// one();
// two();
// three();
// console.log(score);

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//Laxixal Scoping

function outerFun() {
   let outerVar = "I am at score laevel 1";

   function innerFunc() {
      let innerVar = "I am at score laevel 2";
      console.log(outerVar);
   }
   //    console.log(innerVar);
   innerFunc();
}

// outerFun();

// const myGlobalValue = 0;
// function func() {
//    const val1 = 1;
//    console.log(myGlobalValue);
//    function innerofFunc() {
//       const val2 = 2;
//       console.log(val2, val1, myGlobalValue);
//       function innerofInnerFun() {
//          const val3 = 3;
//          console.log(val3, val1, val2, myGlobalValue);
//       }
//       innerofInnerFun();
//    }
//    innerofFunc();
// }
// func();

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//Clouser

function superFun() {
   let outerVal = "I'm Outer";
   function minorFun() {
      console.log(outerVal);
   }
   minorFun();
}
// superFun();

const errorMessage = "File not Found";

setTimeout(function callBack() {
   console.log(errorMessage);
}, 1000);

let pageCount = 0;

const items = [2, 3, 4, 5, 6];

items.forEach(function iterator(num) {
   pageCount++;
   console.log(num);
});

console.log("Page Coumt", pageCount);
