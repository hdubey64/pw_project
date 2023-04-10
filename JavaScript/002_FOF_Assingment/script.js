let input = "Hello, I'm Vishal Dubey, I live in Lucknow";
const reverseStr = (string) => {
   let splitString = string.split("");
   let reverse = splitString.reverse();
   let result = reverse.join("");
   return result;
   console.log(result);
};
setTimeout(() => {
   console.log(reverseStr(input));
}, "1000");
