var express = require('express'),
    app = express();

app.get('/', function(req, res){
    res.send('Hi there from express!!');
})

app.listen(3000, function(){
    console.log('APP IS RUNNING AT PORT');
})