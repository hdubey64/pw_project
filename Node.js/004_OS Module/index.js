const os = require("os");

// console.log("CPU Architecture" + os.arch());
// console.log("Free Memory" + os.freemem());
// console.log("Total Memory" + os.totalmem());
// console.log("Temprory Directory" + os.tmpdir());
// console.log("Network Interfaces" + JSON.stringify(os.networkInterfaces()));

console.log("Endianess:" + os.endianness);
console.log("Hostname:" + os.hostname);
console.log("OS Type:" + os.type());
console.log("OS Plateform:" + os.platform());
console.log("OS Release:" + os.release());
