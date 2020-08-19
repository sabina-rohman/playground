Bubble Sorting- Hackerank
==========================

function sortArr(arr){
    var result = 0;
    for(var i = 0; i < arr.length-1; i++){
        var n1 = arr[i];
        var n2 = arr[i+1];
        if(n1 > n2){
            result+=1;
            arr[i] = n2;
            arr[i+1] = n1;
        }
    }
    return result;
}

function bubbleSort(arr){
    var count = 0;
    while(true){
        var result = sortArr(arr);
        if(result === 0){
            break;
        }
        count += result;
    }
    return count;
}

function main(arr){
    var numSwaps = bubbleSort(arr);
    console.log("Array was sorted in " + numSwaps + " swaps");
}

var a = [18,2,4,78]

main(a)