var btn = document.querySelector("#btn");
var span = document.querySelector("#myspan");
var currency = "EUR";

const xhrFunc = () => {
	btn.addEventListener("click", function() {
		// make a request
		var XHR = new XMLHttpRequest();
		XHR.onreadystatechange = function() {
			if(XHR.readyState === 4 && XHR.status === 200){
				var data = JSON.parse(XHR.responseText);
				var price = data.bpi[currency].rate;
				span.innerText = price + " " + currency;
			} else {
				console.log("Something went wrong");
			}
		}

		XHR.open("GET", "https://api.coindesk.com/v1/bpi/currentprice.json");
		XHR.send();
	});
}

window.onload = xhrFunc;