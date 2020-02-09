var btn = document.querySelector("#btn");
var section = document.querySelector("#comment");

btn.addEventListener("click", sendRequest);

function sendRequest(comment){
	axios.get("https://jsonplaceholder.typicode.com/users")
	.then(addNames)
	.catch(errorHandling)
}

function addNames(res){
	res.data.forEach(function(comment){
		appendComment(comment);
	});
}

function appendComment(comment){
	var newP = document.createElement("p");
	newP.innerText = comment.name;
	section.appendChild(newP);
}

function errorHandling(err){
	if(err.request){
		console.log("Problem with request");
	} else if(err.response){
		console.log("Problem with response " + err.response.status);
	} else {
		console.log("Error", err.message);
	}
}