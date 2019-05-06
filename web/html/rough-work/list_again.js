var todos = ["Get into excercising"];

var input = prompt("What would you like to do?");

while(input !== "quit"){
	if(input === 'list'){
		console.log('*********');
		todos.forEach(function(todo, i){
			console.log(i + " : " + todo);
		});
		console.log('*********');
	}else if(input === "new"){
	var newTodo = prompt("Enter new todo");
		todos.push(newTodo);
	}else if(input === "delete"){
		var index = prompt("Enter the index of todo to delete");
		todos.splice(index,1);
	}
	input = prompt("What would you like to do?");
}
console.log("OK,YOU QUIT THE APP");