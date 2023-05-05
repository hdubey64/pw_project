//Q.1 Count the occurrences.

console.log("Qeestion:1");

let input = "Hello! my evryone my Self Vishal Vishal .";

const wordCount = () => {
   // split the string into an array of words
   const words = input.split(" ");

   //    // create an empty Map to store the word counts
   const wordsCount = new Map();

   //    //oop through the words and update the word counts,if the word is already in the Map, increment its count,otherwise, add the word to the Map with a count of 1
   for (let word of words) {
      const count = wordsCount.get(word) || 0;
      wordsCount.set(word, count + 1);
   }
   // Finally, the wordCountMap is returned with each word and it's count.
   return wordsCount;
};

let result = wordCount(input);

// print the word counts
for (let [word, count] of result) {
   console.log(word + "=> " + count);
}

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Q.2 Only unique items are allowed.
console.log(`\n`);
console.log("Qeestion:2");

const removeDuplicate = () => {
   const newSet = new Set(inputTwo);
   return newSet;
};

let inputTwo = [1, 2, 3, 9, 9, 8, 7, 5, 2, 1, 2, 4, 5, 6, 7, 8];

const uniqueElement = removeDuplicate(inputTwo);
console.log(uniqueElement);

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Q.3 Swap the values.
console.log(`\n`);
console.log("Qeestion:3");

const swapedValue = (x, y) => {
   [x, y] = [y, x];
   return [x, y];
};

const resultSwapValue = swapedValue((x = 20), (y = 50));

console.log(resultSwapValue);

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Q.4 Access random elements.
console.log(`\n`);
console.log("Qeestion:4");

let myArrayOne = [1, 2, 3, 4, 5];
const accessRandomElement = () => {
   let [first, second, , , last] = myArrayOne;
   return [first, second, last];
};

const newArray = accessRandomElement(myArrayOne);

console.log(newArray);

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Q.5 Min and max values.
console.log(`\n`);
console.log("Qeestion:5");

let myArrayFour = [5, 7, 54, 74, 2, 58, 4];

const findMaxMinNumber = () => {
   return { Max: Math.max(...myArrayFour), Min: Math.min(...myArrayFour) };
};

const resultMaxMin = findMaxMinNumber(myArrayFour);
console.log(resultMaxMin);

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Q.6 Nested Objects.
console.log(`\n`);
console.log("Qeestion:6");

const person = {
   name: "Mithun",
   age: 21,
   address: {
      street: "BB, Block, Industrial Area",
      city: "Sector 62, Noida",
      state: "Utter Pradesh",
   },
};

const extractData = () => {
   const {
      name,
      address: { street },
   } = person;
   return { Name: name, Street: street };
};

const resultPersoneData = extractData();

console.log(resultPersoneData);
