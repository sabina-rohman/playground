class NamesGenerator {
    constructor(){

    }

    static generateAllNames(){
        const alphaArr = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 
                          'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'Z'];
        const nums = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];

        let listOfNames = []
        for(let i = 0; i < alphaArr.length; i++){
            for(let j = 0; j < alphaArr.length; j++){
                for(let k = 0; k < nums.length; k++){
                    for(let l = 0; l < nums.length; l++){
                        for(let m = 0; m < nums.length; m++){
                            let name = alphaArr[i] + alphaArr[j] + nums[k] + nums[l] + nums[m];
                            listOfNames.push(name);
                        }
                    }
                }
            }
        }
        return NamesGenerator.shuffle(listOfNames)
    }

    static generateName(){
        return NamesGenerator.allAvailableNames.shift();
    }

    static shuffle(arr){
        for(let i = 0; i < arr.length -1; i++){
            let j = i + Math.floor(Math.random() * (arr.length -i))
            let temp = arr[j];
            arr[j] = arr[i];
            arr[i] = temp;
        }
        return arr;
    }
}

NamesGenerator.allAvailableNames = NamesGenerator.generateAllNames()

class Robot {
    constructor(){
        this.name = NamesGenerator.generateName();
    }

    reset() {
        this.name = NamesGenerator.generateName();
    }
}

let r = new Robot();
console.log(r.name);
r.reset();
console.log(r.name);