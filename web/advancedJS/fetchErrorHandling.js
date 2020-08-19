var btn = document.querySelector("#btn");

btn.addEventListener("click", function(){
  var url = "https://api.coindesk.com/v1/bpi/currentpriceyytty.json";
  fetch(url)
  // handleError extracted to different function
  .then(handleErrors)
  .then(function(response) {
    console.log("ALL FINE")
    console.log(response);
  })
  .catch(function(error){
    console.log(error);
  })
});

function handleErrors(request){
    if(!request.ok) {
     throw Error(request.status);
    }
    return response
  }