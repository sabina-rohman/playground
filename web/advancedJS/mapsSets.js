class MessageBoard {
	constructor(){
		this.messages = new Map;
		this.id = 1;
	}

	addMessages(s){
		this.message.set(this.id, s);
		this.id++;
		return this;
	}

	findMessageById(n){
      this.messages.get(n);
    }

    findMessageByValue(s){
      for(let msg of this.messages.values()){
          if(msg === s){
              return msg;
          }
      }

      removeMessage(n){
        this.messages.delete(n);
        return this;
    }

    numberOfMessages(){
        return this.messages.size;
    }

    messagesToArray(){
        var new Arr = [];
        for(let val of this.messages.values()){
        	newArr.push(val);
        }

        return newArr;

        or return Array.from(this.messages.values());
    }

}

function uniqueValues(arr){
	return new Set(arr).size;
}


function hasDuplicates(arr){
	return new Set(arr).size !== arr.length;
}


function countPairs(arr,num){
	var cache = new Set(arr);
	var count = 0;
	for(let val of arr){
		cache.delete(val);
		if(cache.has(num-val)){
		count++
		}
	}
	return count;
}