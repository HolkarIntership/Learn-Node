const fs = require("fs");

const os = require("os");

console.log(os.networkInterfaces());




console.log("1");

// Non-Blocking 
// fs.appendFile("example.txt", Date.now() + " This is New Req " + "\n", () => {
//   console.log("Append File Susses");
// });

// Blocking
// fs.appendFileSync("example.txt", Date.now() + " This is New Req " + "\n", ()=>{
//     console.log("Append File Susses");
// });

console.log("2");
