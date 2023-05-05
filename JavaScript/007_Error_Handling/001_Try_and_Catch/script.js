// Exception
// let x = undefined;
// console.log(x[0]);

// Handling Exceptin
// try {
//    let x = undefined;
//    console.log(x[0]);
// } catch (err) {
//    console.log("errore handling in catch", err);
// } finally {
//    console.log("Finally always gets executed");
// }

try {
   console.log("hello");
   console.log(a);
   console.log("Ending Try");
} catch {
   console.log("Handled");
} finally {
   console.log("Finally");
}
