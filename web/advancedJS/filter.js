function filter(arr, callback){
  let newArr = [];
  for(const num of arr){
    if(callback(num)){
      newArr.push(num);
    }
  }
  return newArr;
}

// Filter even numbers
console.log(filter([2,3,4], num => num % 2 === 0))

// Filter numbers greater than ten
console.log(filter([11, 3, 40], num => num > 10))