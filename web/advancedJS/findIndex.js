findIndex Example:
-------------------
function findIndex(array, callback){
  for(var i = 0; i < array.length; i++){
    if(callback(array[i])){
      return i
    }
  }
  return -1;
}

function isSix(n){
  return n === 6;
}

function isFour(n){
  return n === 4;
}

var arr = [1,2,3,6,4,7,8];

console.log(findIndex(arr, isFour));

+++++++++++++++++++++++++++++++++++++++++++++++

forEach Example:
-----------------

function forEach(array, callback){
  for(var i = 0; i < array.length; i++){
    callback(array[i]);
  }
}

function printSquare(n){
  console.log(n ** 2);
}

function printCube(n){
  console.log(n ** 3);
}

// Version 1: 
forEach([1,2,3], printSquare)

// Version 2: Using anonymous function
forEach([1,2,3], function(num){
  console.log(num ** 4)
})

// Version 3: Using arrow function
forEach([1,2,3], num => console.log(num ** 5));