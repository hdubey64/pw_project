// For Each
const arr = [2, 3, 4];

arr.forEach((element, index, arr) => {
   console.log(element, index, arr);
});

const heros = ["naagraj", "doga", "dhruva", "maniraj"];

heros.forEach((h) => {
   console.log(h.toUpperCase());
});

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// map

arr.map((element, index, arr) => {
   console.log(element, index, arr);
});

heros.map((h) => {
   console.log(h.toUpperCase());
});

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// filter

console.log(heros);
const herosWithRaj = heros.filter((h) => {
   return h.endsWith("raj");
});
console.log(herosWithRaj);

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// reduce

const cartBill = [20, 30, 50];
const sumOfCartBill = cartBill.reduce((prev, curr) => prev + curr, 0);
console.log(sumOfCartBill);

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// every

const gameScore = [200, 300, 310, 250, 150];

// Check if all values are numbers
const gameScoreCheck = gameScore.every((v) => typeof v === "number");
console.log(gameScoreCheck);

// Find above 200 score

const above200 = gameScore.find((s) => s > 200);
console.log(above200);

//findIndex
//some
//sort
