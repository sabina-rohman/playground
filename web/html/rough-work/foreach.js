// window.setTimeout(function(){
	// //printReverse function *******
	// function printReverse(arr){
	// 	for(var i = arr.length - 1; i >= 0; i--){
	// 		console.log(arr[i]);
	// 	}
	// }

	// printReverse([1,2,3,4])


	//isUniform function*******
	function isUniform(arr){
		var first = arr[0]
		for(var i = 1; i < arr.length; i++){
			if(arr[i] !== first){
				return false;
			}
		}
		return true;
	}

	// function sumArray(arr){
	// 	var total = 0;
	// 	for(var i = 0; i < arr.length; i++){
	// 		total += arr[i];
	// 	}
	// 	return total;
	// }

	function sumArray(arr){
		var total = 0;
		arr.forEach(function(el){
			total += el;
		});
		return total;
	}


	function max(arr){
		var max = arr[0];
		for(var i = 1; i < arr.length; i++){
			if(arr[i] > maxim){
				maxim = arr[i];
			}
		}
		return max;
	}



// }, 500);
