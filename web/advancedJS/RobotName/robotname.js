class NamesGenerator {

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
                            let newName = alphaArr[i] + alphaArr[j] + nums[k] + nums[l] + nums[m];
                             allNames.push(newName);   
                        }
                    }
                }
            }
        }
        return NamesGenerator.shuffle(allNames)
    }
  
    static generateNewName() {
       return NamesGenerator.allAvailableNames.shift();
    }

    static shuffle(allAvailableNames) {
        for (var i = 0; i < allAvailableNames.length - 1; i++) {
            var j = i + Math.floor(Math.random() * (allAvailableNames.length - i));
    
            var temp = allAvailableNames[j];
            allAvailableNames[j] = allAvailableNames[i];
            allAvailableNames[i] = temp;
        }
        return allAvailableNames;
    }
}

NamesGenerator.allAvailableNames = NamesGenerator.generateAllNames()

class Robot {
    constructor(){
        this.name = NamesGenerator.generateNewName();
    }

    reset() {
       this.name = NamesGenerator.generateNewName();
    }
}


let newRobot = new Robot();
console.log(newRobot.name);
console.log(newRobot.name);
newRobot.reset();
console.log(newRobot.name);


  
  