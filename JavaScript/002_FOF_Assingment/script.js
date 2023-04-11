// // 1. Reverse String.
// let input = "Hello, I'm Vishal Dubey, I live in Lucknow";
// const reverseStr = (string) => {
//    let splitString = string.split("");
//    let reverse = splitString.reverse();
//    let result = reverse.join("");
//    return result;
//    console.log(result);
// };
// setTimeout(() => {
//    console.log(reverseStr(input));
// }, "2000");

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//2. Random Number Generator with Delay and Progress Indication

// delay = 5;

// let remainingTime = setInterval(() => {
//    if (delay === 0) {
//       let randomNum = Math.floor(Math.random() * 100) + 1;
//       console.log(`Your No. is ${randomNum}`);
//       setTimeout(function () {
//          clearInterval(remainingTime);
//       }, 1000);
//    } else {
//       console.log(`Waiting Time is ${delay}`);
//       delay--;
//    }
// }, 1000);

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// 3. Build a feature for Store's Inventory.

// let itemList = [
//    { name: "Shirt", price: 10 },
//    { name: "Jeans", price: 15 },
//    { name: "Belt", price: 5 },
//    { name: "Cap", price: 8 },
// ];

// let exchangeRate = 80;

// const priceInRuppe = (itemList) => {
//    let convertedPrice = [];
//    itemList.map((e) => {
//       e.price = e.price * exchangeRate;
//       convertedPrice.push({ ...e });
//    });
//    return convertedPrice;
// };

// console.log(priceInRuppe(itemList));

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// 4. Filtering and Capitalizing: Books Published After 2010 with Author Names.

// let listOfBooks = [
//    { name: "To Kill a Mockingbird", author: "Harper Lee", year: 1960 },
//    { name: "1984", author: "George Orwell", year: 1949 },
//    { name: "Pride and Prejudice", author: "Jane Austen", year: 1813 },
//    { name: "The Great Gatsby", author: "F. Scott Fitzgerald", year: 1925 },
//    { name: "The Catcher in the Rye", author: "J.D. Salinger", year: 1951 },
//    { name: "Moby-Dick", author: "Herman Melville", year: 1851 },
//    { name: "The Lowland", author: "Jhumpa Lahiri", year: 2013 },
//    { name: "The Immortals of Meluha", author: "Amish Tripathi", year: 2010 },
//    { name: "The Oath of the Vayuputras", author: "Amish Tripathi", year: 2013 },
//    { name: "The Girl in Room 105", author: "Chetan Bhagat", year: 2018 },
//    { name: "The Great Indian Novel", author: "Shashi Tharoor", year: 1989 },
//    {
//       name: "The Legend of Lakshmi Prasad",
//       author: "Twinkle Khanna",
//       year: 2016,
//    },
//    {
//       name: "The Forest of Enchantments",
//       author: "Chitra Banerjee Divakaruni",
//       year: 2019,
//    },
//    {
//       name: "Amitav Ghosh The Shadow Lines",
//       author: "Amitav Ghosh",
//       year: 1988,
//    },
//    {
//       name: "The Last Song of Dusk",
//       author: "Siddharth Dhanvant Shanghvi",
//       year: 2004,
//    },
//    {
//       name: "The Unlikely Adventures of the Shergill Sisters",
//       author: "Balli Kaur Jaswal",
//       year: 2019,
//    },
//    { name: "The White Book", author: "Sharanya Manivannan", year: 2018 },
//    {
//       name: "The Narrow Road to the Deep North and Other Travel Sketches",
//       author: "Anees Salim",
//       year: 2013,
//    },
//    { name: "Goat Days", author: "Benyamin", year: 2010 },
// ];

// const remainingBooks = () => {
//    let newArray = [];
//    listOfBooks.filter((e) => {
//       if (e.year >= 2010) {
//          newArray.push({ ...e, author: e.author.toLocaleUpperCase() });
//       }
//    });
//    return newArray;
// };

// console.log(remainingBooks(listOfBooks));

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//5. URL validation.

// const url = `https://wwi51562@$%^...ggb.nema.com/`;

// const urlValidation = () => {
//    let pattern =
//       /[(http(s)?)://(www.)?a-zA-Z0-9@:%._+~#=]{2,256}.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&//=]*)/gi;
//    let regEx = new RegExp(pattern);
//    const result = regEx.test(url);
//    if (result == true) {
//       console.log("Valid URL");
//    } else {
//       console.log("Invalid URL");
//    }
//    return result;
// };

// console.log(urlVlidation(url));

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// const url = `https://www.linkedin.com/in/emmanuel-nduka`;

const urlValidation = (url) => {
   const pattern =
      /^https:\/\/www.linkedin.com\/in\/[a-zA-Z0-9_-]{5,30}[a-zA-Z0-9]$/;

   let regEx = new RegExp(pattern);
   const result = regEx.test(url);
   if (result == true) {
      console.log("Valid URL");
   } else {
      console.log("Invalid URL");
   }
   return result;
};

console.log(urlValidation(`https://www.linkedin.com/in/emmanuel-nduka`));
console.log(
   urlValidation(`https://www.linkedin.com/in/simon-agarwal-975b481b2`)
);
console.log(
   urlValidation(`https://www.linkedincvbbvvcvv.com/in/emmanuel-nduka`)
);
console.log(urlValidation(`https://www.linkedin.com/in/emmanuel-nduka`));
console.log(
   urlValidation(`https://www.linkedisfddbbvbfn.com/in/emmanuel-nduka`)
);
