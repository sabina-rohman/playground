function Stack(){
  this.arr = [];
  
  this.push = (el) => {
    this.arr.push(el);
  }
  
  this.pop = () => {
    if(this.isEmpty()){
      return "Array is empty";
    }
    return this.arr.pop()
  }
  
  this.show = () => {
    return this.arr;
  }
  
//   Helper method
  this.isEmpty = () => {
    return this.arr.length === 0;
  }
}

var firstStack = new Stack();

firstStack.push(1);
firstStack.push(2);
firstStack.push(3);
firstStack.push(4);
firstStack.push(3);
firstStack.push(5);


console.log(firstStack.show());

var secondStack = new Stack();

while(!firstStack.isEmpty()){
  var item = firstStack.pop();
  if(item === 3){
    secondStack.push("NEW ITEM");
  } else {
    secondStack.push(item);
  }
 }
  

while(!secondStack.isEmpty()){
  var item = secondStack.pop();
  firstStack.push(item);
}

console.log(firstStack.show());
console.log(secondStack.show());
console.log(firstStack.show());
