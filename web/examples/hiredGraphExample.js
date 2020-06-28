var arr = [1, 2, 3, 4, 5, 9, 10, 6, 7, 8];

function leftTotal(arr) {
    var arrLen = arr.length;
    // console.log(`Array length:- ${arr.length}`);
    var counter = 1;
    var totalSumLeft = 0;
    while (true) {
        var start = Math.pow(2, counter) - 1;
        var end = start + (Math.pow(2, counter - 1) - 1);
        // if arrays length is less than end point, take the last element's index
        if (end > arrLen - 1) {
            end = arrLen - 1;
        }

        if (start > arrLen - 1) {
            break;
        }

        // step1: store the sub array in a variable
        var subArray = getSubArray(arr, start, end);
        // step2: if sub array has no -1 we will add the sum of the whole array to the total.
        if(containsMinus(subArray)){
            totalSumLeft += sumWithoutMinus(subArray);
            break;
        } else {
            totalSumLeft += getSumOfArray(subArray);
        } 
        counter++;
    }
    return totalSumLeft
}


function getSubArray(arr, start, end){
    var slicedArray = arr.slice(start, end+1);
    return slicedArray;
}

function getSumOfArray(arr){
    return arr.reduce((a,b) => a+b, 0);
}

function containsMinus(arr){
    if(arr.indexOf(-1)){
        return true;
    }
    return false;
}

function sumWithoutMinus(arr){
    return getSumOfArray(arr) + 1;
}

console.log(leftTotal([1,2,3,4,-1,5]));




