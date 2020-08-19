CALL
=====

function Calculate(a,b,c,d){
  return this.firstName + " has calculated " + (a+b+c+d);
}

var elie = {
  firstName: "Elie"
}

var colt = {
  firstName: "Colt"
}


console.log(Calculate.call(elie,1,2,3,4)); 

BIND
=====

function addNumbers(a,b,c,d){
  return this.name + " just calculated " + (a+b+c+d);
}

var elie = {
  name: 'Elie',
  job: 'instructor'
}

var elieCalc = addNumbers.bind(elie,1,2);
console.log(elieCalc(3,4));