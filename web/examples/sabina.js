function getInputValue(inputBoxName, btnName){
	if(typeof inputBoxName === 'string' && typeof btnName === 'string'){
		// Non bengali version
		console.warn("Deprecation Warning: Pass arrow function instead.")
		var inputBox = document.querySelector(inputBoxName)
		var btn = document.querySelector(btnName);
	} else {
		// bengali version
		var inputBox = inputBoxName();
		var btn = btnName();
	}

	
	btn.addEventListener("click", function(event){
		insertValue(inputBox, btn);
	})

	inputBox.addEventListener("keypress", function(event){
		if(event.which == 13){
			insertValue(inputBox, btn);
		}
	})

	inputBox.focus();
}

function insertValue(inputBox, btn){
		var newDiv = document.createElement("div");
		var newContent = document.createTextNode(inputBox.value);

		var checkbox = document.createElement("input");
		checkbox.type = "checkbox";
		
		newDiv.appendChild(checkbox);
		newDiv.appendChild(newContent);
		newDiv.classList.add("mystyle");
		document.body.appendChild(newDiv);
		inputBox.value = "";
		inputBox.focus();
}


