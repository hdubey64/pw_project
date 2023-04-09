const email = "example@a.com";
const emaiRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

if (emaiRegex.test(email)) {
   console.log("Valid Email");
} else {
   console.log("Invalid Email");
}

const text = "Hello, my name is Vishal Dubey I live in Lucknow";
const regex = /Vishal/;

if (regex.test(text)) {
   console.log("Found Match");
} else {
   console.log("Not found Match");
}

let pattern = "Vishal";

let regExOne = new RegExp(pattern);

let flag = "gi";

let regExTwo = new RegExp(pattern, flag);

let regExThree = /Vishal/gi;

const strToCheck =
   "Hello, my name is VISHAL Dubey I live in Lucknow, Vishal, vishal";

const result = regExThree.test(strToCheck);

console.log(result);

const ontherResult = strToCheck.match(regExThree);
console.log(ontherResult);

const oneMoreResult = strToCheck.replace(regExThree, "Vis-hal");
console.log(oneMoreResult);

const webUrl = "https://peskills.com/hitesh%21chaudhary";
const useAbleUrl = webUrl.replace(/%\d/d/, "-");
console.log(useAbleUrl);
