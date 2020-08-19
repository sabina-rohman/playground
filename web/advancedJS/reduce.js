1.) let mapFilterAndReduce = arr => arr
  .map(val => val.firstName)
  .filter(val => val.length < 5)
  .reduce(function(acc, next){
    acc[next] = next.length;
    return
  },{})

console.log(mapFilterAndReduce(
  [
    {firstName: 'Sabina', last: 'Barbhuiya'}, 
    {firstName: 'Monsur', last:'Baby'},
    {firstName: 'Lulu', last:'Baby'},
    {firstName: 'Tom', last:'Baby'}
    ]
  )
)
===================================================
2.) function addKeyAndValue(arr){
  return arr.reduce(function(acc, next){
    next['length'] = next.firstName.length
    return acc;
  },arr)
}

console.log(addKeyAndValue(
  [
    {firstName: 'Sabina', last: 'Barbhuiya'}, 
    {firstName: 'Monsur', last:'Baby'},
    {firstName: 'Lulu', last:'Baby'},
    {firstName: 'Tom', last:'Baby'}
    ]
  )
)
+++++++++++++++++++++++++++++++++++++++++++++++++++++
3.)function rollingAverage(arr){
 return arr.reduce(function(acc, next, index){
     acc[index] = next**2;
     return acc;
  }, [])
}

console.log(rollingAverage([1,2,3,4]));
++++++++++++++++++++++++++++++++++++++++++++++++++++++
function rollingAverage(arr){
  var arrLength = arr.length;
 return arr.reduce(function(acc, next, index){
     acc[arrLength - index -1] = next;
     return acc;
  }, [])
}

console.log(rollingAverage([1,2,3,4]));