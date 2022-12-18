
console.log("-------Gathering Information-------")
console.log(" ");
let client = prompt("Enter the client's name:");
console.log(" ");
let business = prompt("Enter the business name:");
console.log(" ");
let rate = prompt("Rate per hour?");
console.log(" ");
let day1 = prompt("Hours worked on day 1:");
console.log(" ");
let day2 = prompt("Hours worked on day 2:");
console.log(" ");
let day3 = prompt("Hours worked on day 3:");
console.log(" ");

day1 = parseInt(day1);
day2 = parseInt(day2);
day3 = parseInt(day3);

let hours = (day1 + day2 + day3);
let total = (hours*rate);

console.log("-------Invoice-------");
console.log("Brianna Watt DBA " + client);
console.log("Invoice for " + business);
console.log("Hours: " + hours);
console.log("Rate: " + rate);
console.log("Total: " + total );