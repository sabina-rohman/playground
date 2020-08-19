console.log("PRINT OUT ARRAY IN REVERSE");

function printReverse(arr){
	for(var i = arr.length - 1; i >= 0; i--){
		console.log(arr[i]);
	}
}

printReverse([3,6,2,5])

console.log("RETURN TRUE IF ARRAY IS UNIFORM");
// not using forEach in this problem

function isUniform(arr){
	var first_item = arr[0];
	for(var i = 1; i < arr.length; i++){
		if(arr[i] !== first_item){
			return false;
		}
	}
	return true;
}

console.log("RETURN THE SUM OF ALL NUMBERS IN THE ARRAY");

// function sumArray(arr){
// 	var result = 0;
// 	for(var i = 0; i < arr.length; i++){
// 		result += i;
// 	}
// 	return result;
// }

function sumArray(arr){
	var total = 0
	arr.forEach(function(element){
		total = total + element;
	});
	return total;
}

console.log("RETURN THE MAXIMUM NUMBER IN THE ARRAY");

function max(arr){
	var max = arr[0];
	for(var i = 1; i < arr.length; i++){
		if(max < arr[i]){
			max = arr[i];
		}
	}
	return max;
}