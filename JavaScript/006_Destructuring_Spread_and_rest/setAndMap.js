// let emptySet = new Set();
// console.log(emptySet.size);

// let myArray = [1, 2, "Vishal", { name: "Vishal", lastName: "Dubey" }, 3, 4, 5];
// let newSet = new Set(myArray);

// console.log(newSet);

// let myArrayTwo = [1, 2, 3];
// let newSet = new Set([...myArrayTwo]);
// console.log(newSet);

// newSet.add(9);
// // newSet.delete(9);
// // newSet.clear();
// console.log(newSet);
// console.log(newSet.has(9));
// console.log(newSet.has(10));

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
let setA = new Set([1, 2, 3, 5, 7, 8, 9]);
let setB = new Set([2, 3, 4, 6, 5, 7, 9]);

// function setDifference(setA, setB) {
//    return new Set([...setA].filter((e) => !setB.has(e)));
// }

// let result = setDifference(setA, setB);
// console.log(result);
// console.log(typeof setA);

// function setUnion(setA, setB) {
//    const result = new Set([...setA]);
//    setB.forEach((element) => {
//       result.add(element);
//    });
//    return result;
// }

// let result = setUnion(setA, setB);
// console.log(result);

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// let setMap = new Map();

// console.log(setMap.size);

// let arr = [
//    [1, "Vishal"],
//    [2, "Shashank"],
//    [3, "Ashutosh"],
//    [4, "Raj"],
//    [5, "Mono"],
// ];

// arr.map((arrayItem) => setMap.set(arrayItem[0], arrayItem[1]));
// console.log(arr);

// for (let [key, value] of setMap) {
//    console.log(key + " = " + value);
// }

//Creating map
const myMap = new Map();

// For setup of key value pair
myMap.set("Apple", 10);
myMap.set("Banana", 20);
myMap.set("Cherry", 30);

//For printing Value
console.log(myMap.get("Apple")); //Output:- 10

//Itreting all the key of myMap
for (let key of myMap.keys()) {
   console.log(key); //Output:- Apple   Banana    Cherry
}

//Itreting all the values of myMap
for (let value of myMap.values()) {
   console.log(value); //Output:- 10   20   30
}

//Itreting all the key and values of myMap
for (let [key, value] of myMap) {
   console.log(key + " = " + value); //Output:- Apple = 10   Banana = 20   Cherry = 30
}

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
