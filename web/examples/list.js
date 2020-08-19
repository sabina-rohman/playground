var btn = document.querySelector('#btn');
var list = document.querySelector('#list');
var input = document.querySelector('#input');
const event = new Event('build');


btn.addEventListener('click', function(){
	var newLi = document.createElement("li");
	newLi.appendChild(document.createTextNode(input.value));
	list.append(newLi);
	input.value = '';
	list.dispatchEvent(event);
})

list.addEventListener('build', function(argument) {
	alert('Hello');
})

