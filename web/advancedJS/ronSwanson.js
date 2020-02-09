var url = 'https://ron-swanson-quotes.herokuapp.com/v2/quotes';

var xhrbtn = document.querySelector("#xhr");
var fetchbtn = document.querySelector("#fetch");
var jquerybtn = document.querySelector("#jquery");
var axiosbtn = document.querySelector("#axios");
var quotes = document.querySelector("#quote");


xhrbtn.addEventListener("click", function(){
	var XHR = new XMLHttpRequest();
	XHR.onreadystatechange = function(){
		if(XHR.readyState == 4 && XHR.status == 200){
			console.log(XHR.responseText);
			quotes.innerText = JSON.parse(XHR.responseText)[0];
		}  
	}
	XHR.open("GET", url)
	XHR.send();
});

fetchbtn.addEventListener("click", function(){
	fetch(url)
	.then(function(req){
		console.log(req);
		req.json().then(function(data){
			quotes.innerText = data[0];
		})
	})
	.catch(function(){
		alert("ERROR");
	})
})

$('#jquery').click(function(){
  $.getJSON(url)
  .done(function(data){
    $('#quote').text(data[0]);
  });
});

axiosbtn.addEventListener("click", function(){
	axios.get(url)
	.then(function(res){
		quotes.innerText = res.data[0];
	})
	.catch(function(){
		alert("ERROR!");
	})
});

