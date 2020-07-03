var arr = [1, 2, 3, 4, 5, 9, 10, 6, 7, 8];

function leftTotal(arr) {
    var arrLen = arr.length;
    // console.log(`Array length:- ${arr.length}`);
    var counter = 1;
    var totalSumLeft = 0;
    while (true) {
        var start = (2 ** counter) - 1;
        var end = start + ((2 ** counter - 1) - 1);
        // if arrays length is less than end point, take the last element's index
        if (end > arrLen - 1) {
            end = arrLen - 1;
        }

        if (start > arrLen - 1) {
            break;
        }

        // step1: store the sub array in a variable
        var subArray = getSubArray(arr, start, end);
        // console.log(subArray);
        // step2: if sub array has no -1 we will add the sum of the whole array to the total.
        if(containsMinus(subArray)){
            totalSumLeft += sumWithoutMinus(subArray);
            // console.log(totalSumLeft);
            break;
        } else {
            totalSumLeft += getSumOfArray(subArray);
            // console.log(totalSumLeft);
        } 
        counter++;
    }
    return `Left branch: ${totalSumLeft}`;
}

function rightTotal(arr){
    var arrLen = arr.length;
    var counter = 0;
    var totalSumRight = 0;
    while(true) {
        var start = 3 * (2**counter) - 1;
        var end = start + (2**counter) - 1;
        // if array's length is less than end point, take the last element's index
        if(end > arrLen){
            end = arrLen - 1;
        }

        if(start > arrLen){
            break;
        }

        var subArray = getSubArray(arr, start, end);
        if(containsMinus(subArray)){
            totalSumRight += sumWithoutMinus(subArray);
            // console.log(totalSumRight);
            break
        } else {
            totalSumRight += getSumOfArray(subArray);
        }

        // commonMethods(start, end, arr);
        counter++
    }
    return `Right branch: ${totalSumRight}`;
}

function getSubArray(arr, start, end){
    var slicedArray = arr.slice(start, end+1);
    // console.log(slicedArray);
    return slicedArray;
}

function getSumOfArray(arr){
    return arr.reduce((a,b) => a+b, 0);
}

function containsMinus(arr){
    if(arr.indexOf(-1) !== -1){
        return true;
    }
    return false;
}

function sumWithoutMinus(arr){
    var withMinus = getSumOfArray(arr) + 1;
    // console.log(withMinus);
    return withMinus;
}

// function commonMethods(start, end, arr){
//     var totalSumRight = 0;
//     if(end > arrLen){
//         end = arrLen - 1;
//     }
    
//     if(start > arrLen){
//         break;
//     }
    
//     var subArray = getSubArray(arr, start, end);
//     if(containsMinus(subArray)){
//         totalSumRight += sumWithoutMinus(subArray);
//         // console.log(totalSumRight);
//         break
//     } else {
//         totalSumRight += getSumOfArray(subArray);
//     }
//     return totalSumRight;
// }

console.log(leftTotal([1,2,3,4,-1,5,6]));
console.log(rightTotal([1,2,3,4,-1,5,6]));

function leftOrRight(arr){
    if(leftTotal(arr) > rightTotal(arr)){
        return `Left branch is greater than right branch`;
    } else {
        return `Right branch is greater than left branch`;
    }
}

console.log(leftOrRight([1,2,3,4,-1,5,6]));




