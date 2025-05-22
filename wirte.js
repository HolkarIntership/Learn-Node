const { error } = require("console");
const fs = require("fs");

// fs.writeFile

// fs.writeFileSync("./test.txt", "Hello i am Deepak hyyyy", function (err, data) {
//   if (err) throw err;
//   console.log("File created successfully",data);
// });

// fs.writeFile("./test.txt", "Hello i am Deepak Singh ", function (err, data) {
//   if (err) throw err;
//   console.log("File created successfully",data);
// });

// fs.readFile("./test.txt", "utf-8", function (err, data) {
//   if (err) throw err;
//   console.log("File created successfully", data);
// });

// fs.readFileSync("./test.txt", "utf-8", function (err, data) {
//   if (err) throw err;
//   console.log("File created successfully", data);
// });

// fs.appendFile("./test.txt", new Date() + "\n", function (err, data) {
//   if (err) throw err;
//   console.log("File Append successfully", data);
// });

// fs.appendFileSync("./test.txt", new Date() + "\n", function (err, data) {
//   if (err) throw err;
//   console.log("File Append successfully", data);
// });

// fs.copyFile("./test.txt","./example.txt", function (err, data) {
//   if (err) throw err;
//   console.log("File Capy successfully", data);
// })

// fs.access("./test.txt", fs.constants.F_OK,function (err, data) {
//   if (err) throw err;
//   console.log("File access successfully", data);
// })

fs.unlink("./test.txt",function (err, data) {
  if (err) throw err;
  console.log("File UnLink successfully", data);
})

// console.log(fs);
