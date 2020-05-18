var arr = [1,2,3,2,4,4];

arr.reduce(function(acc, next){
    if(next in acc){
        acc[next] ++;
    } else {
        acc[next] = 1;
    }
    return acc;
}, {})

var names = ["Elie", "Matt", "Colt", "Tim"];

names.reduce(function(acc, next){
    return acc + " " + next

}, "The instructors are-")

createFullName([{first: "Colt", last: "Steele"}, {first: "Matt", last: "Lame"}])

function createFullName(arr){
    return arr.reduce(function(acc, next){
        acc.push(next.first + " " + next.last);
        return acc;
}, [])
}


// Write a function called extractValue which accepts an array of objects and a key and returns a new array with the value of each object at the key.

// Examples:
    // var arr = [{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}]
    // extractValue(arr,'name') // ['Elie', 'Tim', 'Matt', 'Colt']
*/

function extractValue(arr,key){
	return arr.reduce(function(accumulator, nextValue){
        accumulator.push(nextValue[key])
        return accumulator
    }, []);
}

// Write a function called vowelCount which accepts a string and returns an object with the keys as the vowel and the values as the number of times the vowel appears in the string. This function should be case insensitive so a lowercase letter and uppercase letter should count

function vowelCount(str){
    var vowels = "aeiou";
    return str.split('').reduce(function(accumulator, nextValue){
        var nextValue = nextValue.toLowerCase();
        if(vowels.indexOf(nextValue) !== -1){
            if(nextValue in accumulator){
            accumulator[nextValue] ++;
            } else {
                accumulator[nextValue] = 1;
            }
        }
        return accumulator;
    }, {})
}

function addKeyAndValue(arr, key, value){
    return arr.reduce(function(acc, next,idx){
    acc[idx][key] = value;
    return acc;
  }, arr)
}

 function partition(arr, callback){
    return arr.reduce(function(acc, next){
        if(callback(next)){
            acc[0].push(next);
        } else {
            acc[1].push(next);
        }
        return acc;
    }, [[], []])
} 

function extractValue(arr, key){
    return arr.reduce(function(accumulator, nextValue){
        accumulator.push(nextValue[key]);
        return accumulator;
    }, [])
} 