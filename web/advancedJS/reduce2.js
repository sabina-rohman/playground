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

function extractValue(arr){
	
}