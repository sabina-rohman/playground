
var button = document.querySelector("button");
var isPink = false;

// button.addEventListener("click", function(){
// 	if(isPink){
// 		document.body.style.background = "white";
// 	}else{
// 		document.body.style.background = "pink";
// 	}
// 	isPink != isPink;
// });

button.addEventListener("click", function(){
	document.body.classList.toggle("pink");
});