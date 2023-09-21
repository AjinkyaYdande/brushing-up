// for Loop
const arr = ["gym", "workout meal", "travel to office", " work"];
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i], i);
}
console.log("---------------------------------------------------");

// forEach Loop
arr.forEach(function (ar, i) {
  console.log(ar, i);
});

// another forEach Loop example
function callFunc(ar, i) {
  console.log(ar, i);
}
arr.forEach(callFunc);

// for in Loop
for (let i in arr) {
  console.log(arr[i], "for in");
}
