var todos = ["Get into excercising"];
window.setTimeout(function() {
  // put all of your JS code from the lecture here
  var input = prompt("What would you like to do?");

while(input !== "quit"){
	if(input === 'list'){
		listTodos();
	}else if(input === "new"){
		addTodo();
	}else if(input === "delete"){
		deleteTodo();
	}
	input = prompt("What would you like to do?");
}
console.log("OK,YOU QUIT THE APP");

function listTodos(){
	console.log('*********');
	todos.forEach(function(todo, i){
		console.log(i + ": " + todo);
	});
		console.log('*********');
}

function addTodo(){
	var newTodo = prompt("Enter new todo");
		todos.push(newTodo);
		console.log("Added todo");
}

function deleteTodo(){
	//ask for index to be deleted
	var index = prompt("Enter the index of todo to delete");
	//delete that todo
		todos.splice(index,1);
		console.log("Deleted todo");
}

}, 500);
