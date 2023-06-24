const path = require("path");

// console.log(path.sep);

// console.log(process.env.Path);

// console.log(path.delimiter);

const filePath1 = "/public_html/home/index.html";

const currentFilePath = __filename;

console.log("Current File Path :-", currentFilePath);

// let result = path.basename(currentFilePath);
// console.log(result);

let basename = path.basename(currentFilePath);
console.log("Base name :-", basename);

let basenameWithoutExt = path.basename(currentFilePath, ".js");
console.log("Base name without Ext:-", basenameWithoutExt);

let dirName = path.dirname(currentFilePath);
console.log("Dir name:-", dirName);

console.log("ext1:-", path.extname(currentFilePath));
console.log("ext2:-", path.extname("currentFilePath.md.js"));

let pathToFile = path.format({
   dir: "/public_html/home",
   base: "index.html",
});

console.log("Path to File", pathToFile);

console.log("Is Absolute:-", path.isAbsolute(currentFilePath));
console.log("Is Absolute:-", path.isAbsolute("/currentFilePath"));
console.log("Is Absolute:-", path.isAbsolute("./currentFilePath"));
console.log("Is Absolute:-", path.isAbsolute("../currentFilePath"));

let pathToDir = path.join("/home", "js", "dist", "index.js");
console.log("Path to dir", pathToDir);

console.log("parse:", path.parse(currentFilePath));

console.log(
   "relative path:",
   path.relative("/home/user/config/pw/project", "/home/user/project/pw/js/")
);

console.log("resolve:-", path.resolve());

console.log("Normalize", path.normalize("//home..//node.//user//js"));
