var arr = [2,4,6];

function halfValues(arr){
	var newArr = [];
	arr.forEach(function(el){
		newArr.push(el/2);
	})

	return newArr;
}

// WHAT'S GOING ON INSIDE?

function foEach(array, callback){
	for(var i = 0; i < array.length; i++){
		callback(array[i], i, array);
	}
}

// 	forEach RETURNS UNDEFINED