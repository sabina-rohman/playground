                                                                                                                                                                                       // Random Users Project- error handling
var url = "https://randomuser.me/api/";

var btn = document.querySelector("#btn");
var fullnameDisp = document.querySelector("#fullname")
var emailDisp = document.querySelector("#email");
var avatar = document.querySelector("#avatar");
var username = document.querySelector("#username");
var cityDisp = document.querySelector("#city");

btn.addEventListener("click", function(){
	fetch(url)
	.then(handleErrors)
	.then(parseJSON)
	.then(updateProfile)
	.catch(displayErrors)
});

function handleErrors(res) {
	if(!res.ok){
		throw Error(res.status);
	}
	return res;
}

function parseJSON(response){
		return response.json().then(function(parsedData){
			return parsedData.results[0];
		});
	}

function updateProfile(data){
	fullnameDisp.innerText = data.name.first + " " + data.name.last
	avatar.src = data.picture.medium;
	username.innerText = data.login.username;
	emailDisp.innerText  = data.email;
	cityDisp.innerText = data.location.city;
}

function displayErrors(err) {
	console.log("Inside display errors");
	console.log(err);
}