var numbers = [
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10"]

 var cardinals = [
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
  "nine",
  "ten"]
 
// returns true / false
cardinals.includes("ten");
 // can store in a variable
var u = cardinals.includes("eleven");

function finditem(itemName) {
    var val = itemName.toLowerCase();
    
    if(numbers.includes(val)){
        return val;
    } else if (cardinals.includes(val)){
        return val;
    } else {
        return null;
    }
}

const tabNumber = finditem(userInput);

const tabs = await browser.tabs.query({});
context.makeTabActive(tabs[tabNumber]);

