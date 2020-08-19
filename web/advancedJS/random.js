var arr = randomOperarions();
var first = arr[0];
var firstNum = document.querySelector("#first");
firstNum.value = first;

function randomOperarions(){
    var firstNum = Math.floor(Math.random()*101);
    var secondNum = Math.floor(Math.random()*100);
    var operatorArr = ['+', '-', '*', '/'];

    var item = operatorArr[Math.floor(Math.random() * operatorArr.length)];
    var result = 0;
    var exp = firstNum 

    if(item === '+'){
        result = firstNum + secondNum;
    } else if(item === '-'){
        result = firstNum - secondNum;
    }else if(item === '*'){
        result = firstNum * secondNum;
    }else if(item === '/'){
        result = firstNum / secondNum;
    }
    return [firstNum, item, secondNum, result]
}

