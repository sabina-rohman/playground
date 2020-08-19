var url = "https://api.coindesk.com/v1/bpi/currentprice.json";

// options can be passed as second argument to fetch with url being the first
// the url (bitcoin) will not take POST request
fetch(url, {
	method: 'POST',
	// GET request don't take bodies, only POST requests does.
	// JSON.strinify will take the object and parse the strings
	body: JSON.stringify({
		name: 'blue',
		login: 'bluecat'
	})
})
 .then(function(res){
  console.log(res);
  return res.json();
})
.then(function(data){
  console.log(data.bpi.EUR.rate);
})

