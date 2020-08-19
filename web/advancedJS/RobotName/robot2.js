class NameGenerator {

    static generateAllNames() {
        const alphaArr = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 
                          'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'Z'];
        const nums = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];

        const allNames = [];
        for(let i = 0; i < alphaArr.length; i++){
            for(let j = 0; j < alphaArr.length; j++){
                for(let k = 0; k < nums.length; k++){
                    for(let l = 0; l < nums.length; l++){
                        for(let m = 0; m < nums.length; m++){
                            let name = alphaArr[i] + alphaArr[j] + nums[k] + nums[l] + nums[m];
                            allNames.push(name);
                        }
                    }
                }
            }
        }
        return NameGenerator.shuffle(allNames);
    }

    static generateName(){
        return NameGenerator.allAvailableNames.shift();
    }

    static shuffle(arr){
        for(let i = 0; i < arr.length; i++){
            let j = Math.floor(Math.random() * (arr.length-1));
            let temp = arr[j];
            arr[j] = arr[i];
            arr[i] = temp;
        }
        return arr;
    }

}

NameGenerator.allAvailableNames = NameGenerator.generateAllNames();

class Robot {
    constructor() {
        this.name = NameGenerator.generateName();
    }

    reset(){
        this.name = NameGenerator.generateName();
    }
}

let monsur = new Robot();
console.log(monsur.name);
monsur.reset();
console.log(monsur.name);