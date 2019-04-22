console.log("PRINT THE EVEN NUMBERS");
// function isEven(num){
//   if(num % 2 === 0){
//     return true;
//   }
//   else{
//     return false;
//   }
// }
function isEven(num){
    return num % 2 === 0;
}

// console.log("PRINT OUT THE FACTORIAL");
// function factorial(num){
//   //define a result variable
//   var result = 1;
//   //calculate factorial and store value in result
//   for(var i = 2; i <= num; i++){
//     result = result * i;
//   }
//   //return the result variable
//   return result;
// }

function factorial(num){
  if(num === 0){
    return 1;
  }
  else{
    var result = num;
    for(var i = num-1; i >=1; i--){
      result = result * i;
    }
  }
    return result;
}

// factorial(4) == 4 * 3 * 2 * 1

console.log("PRINT KEBAB TO SNAKE");

function kebabToSnake(str) {
  var newStr = str.replace(/-/g, "_");
  return newStr;
}
