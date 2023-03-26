function compare() {
   var a = 1;
   var b = 1;
   if (a.toString() === b) return true;
   else return false;
}

console.log(compare());

// var a = 0;
// for (a; a < 5; a++);
// console.log(a);

// var quiz = [1, 2, 3];
// var js = [6, 7, 8];
// var result = quiz.concat(js);
// document.writeln(result);

var js = 0;
while (js < 10) {
   console.log(js);
   js++;
}

var a = 5,
   b = 1;
var obj = { a: 10 };

console.log(obj.a);

function height() {
   var height = 120;
   var type = height >= 190 ? "tall" : "short";
   return type;
}

// console.log(height());

// function example(javascript)
// {
// return (javascript ?  "Yes" :  "No");
// }
// bool ans=true;
// console.log(example(ans));

let jjbj = null;
console.log(typeof jjbj);
console.log(jjbj);

var js = (function (x) {
   return x * x;
})(10);

console.log(js);

var b = 1;
if (b != null) console.log(1);
else console.log(0);

for (var i = 0; i < 3; i++) {
   setTimeout(() => console.log(i), 500);
}

var x;

x = 25 / 0;

console.log(x);
Number;
