Map:
======

function map(arr, callback){
  let newArr = [];
  for(const num of arr){
    newArr.push(callback(num))
  }
  return newArr;
}

console.log(map([2,3,4], num => num ** 2));

console.log(map([2,3,4], num => num ** 4));

console.log([5,6,7].map(num => num ** 2))

