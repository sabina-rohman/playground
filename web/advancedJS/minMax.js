
var arr = [1,3,5,7,9];

var min = Math.min(...arr);
console.log(min);

var max = Math.max(...arr);
console.log(max);

var total = 0;
for(var i = 0; i < arr.length; i++){
  total += arr[i];
}

console.log((total - min) + " " + (total-max));