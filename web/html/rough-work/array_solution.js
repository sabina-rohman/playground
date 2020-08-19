console.log("PRINT REVERSE");

function printReverse(arr){
	for(var i = arr.length - 1; i >= 0; i--){
		console.log(arr[i]);
	}
}

printReverse([1,2,3,4])

console.log("IS UNIFORM")

function isUniform(arr){
	var first = arr[0]
	for(var i = 1; i < arr.length; i++){
		if(arr[i] !== first){
			return false;
		}
	}
	return true;
}

console.log("SUM ARRAY");

function sumArray(arr){
	var result = 0;
	for(var i = 0; i < arr.length; i++){
		result += arr[i];
	}
	return result;
}

// function sumArray(arr){
// 	var total = 0
// 	arr.forEach(function(element){
// 		total += element;
// 	});
// 	return total;
// }

console.log("MAX ELEMENT IN ARRAY");

function max(arr){
	var max = arr[0]
	arr.forEach(function(element){
		if(element > max){
			max =  element;
		}
	});
	return max;
}
