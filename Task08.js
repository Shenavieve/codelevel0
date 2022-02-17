function timeConverter (num) {
  var hours = Math.floor (num / 60);
  var minutes = num % 60;
  
  if (num < 120 && minutes >1) {
    console.log (hours + "hour , " + minutes + "minutes");
  }

if (num >= 120 && minutes <=1) {
    console.log (hours + "hours , " + minutes + "minute");
}
if (num > 120 && minutes >1) {
    console.log (hours + "hours , " + minutes + "minutes");
}
if ( num <120 && minutes <=1) {
    console.log (hours + "hour , " + minutes + "minute");
}
return hours + ":" + minutes;
}
console.log (timeConverter (18000));