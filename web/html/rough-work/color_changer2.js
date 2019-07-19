var button = document.querySelector("button");
var body = document.querySelector("body");
var isPurple = false;

// **** class toggle method***_/_/_/
// button.addEventListener("click", function(){
// 	body.classList.toggle("purple");
// });


// ***** isPurple =  false method ******
button.addEventListener("click", function(){
	if(isPurple){
		body.style.background = "white";
	}else {
		body.style.background = "purple";
	}

	isPurple = !isPurple
});