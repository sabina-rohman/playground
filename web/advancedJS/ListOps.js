class List {
  constructor(array=[]) {
    this.values = []
    for(var i = 0; i < array.length; i++){
      let item = array[i];
      if(typeof(item) === 'number'){
        this.values.push(item);
      } else if(item.constructor === List){
        this.values = this.values.concat(item.values);
      }
    }
  }

  append(otherList) {
    const arr1 = [...this.values];
    const arr2 = [...otherList.values];
    const newArr = [...arr1, ...arr2]
    return new List(newArr);
  }

  concat(otherList) {
      return this.append(otherList);
  }
}

const list1 = new List([1, 2]);
const list2 = new List([3]);
const list3 = new List([]);
const list4 = new List([4, 5, 6]);
const listOfLists = new List([list2, list3, list4])
const result = list1.concat(listOfLists);
console.log(result)