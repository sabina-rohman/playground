var express = require('express'),
    app = express(),
    port = 3000 || process.env.PORT,
    bodyParser = require('body-parser');

var todoRoutes = require('./routes/todos');
var notTodoRoutes = require('./routes/notTodos');
app.use(express.static(__dirname + '/views'));
app.use(express.static(__dirname + '/public'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


app.get('/', function(req, res){
    res.sendFile('index.html');
});

app.use('/api/todos/', todoRoutes);
app.use('/api/notTodos/', notTodoRoutes)

app.listen(port, function(){
    console.log('APP IS RUNNING AT PORT');
})