const powerTwo = (n) => {
   return n ** 2;
};

function powerCube(powerTwo, n) {
   return powerTwo(n) * n;
}

console.log(powerCube(powerTwo, 10));

function sayHello() {
   return () => {
      console.log("Hello Vishal");
   };
}

let guessValue = sayHello();
console.log(guessValue);

guessValue();

const higherOrder = (n) => {
   const oneFun = (m) => {
      const twoFun = (p) => {
         return n + m + p;
      };
      return twoFun;
   };
   return oneFun;
};

console.log(higherOrder(5)(6)(7));

const myNum = [2, 5, 4, 7];

const sumArray = (arr) => {
   let total = 0;
   arr.forEach(function (element) {
      total += element;
   });
   return total;
};

console.log(sumArray(myNum));
let sumArrayOne = sumArray(myNum);

function oneMoreHello() {
   console.log("Hello Vishal !", Math.random());
}
setInterval(oneMoreHello, 1000);
setTimeout(oneMoreHello, 2000);
