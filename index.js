// Level 0-3

var date = new Date();
var hours = date.getHours();
var minutes = date.getMinutes();
var seconds = date.getSeconds();

console.log(date);
console.log(hours);
console.log(minutes);
console.log(seconds);

var date2 = date.toLocaleString();
console.log(date2);

console.log(`Current date and time = `, date2);
