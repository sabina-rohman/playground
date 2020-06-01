var mongoose = require('mongoose'); 

var notTodoSchema = new mongoose.Schema({
    name: {
        type: String,
        required: 'Name cannot be blank!'
    },
    completed: {
        type: Boolean,
        default: false
    },
    created_date: {
        type: Date,
        default: Date.now
    }
});

var NotTodo = mongoose.model('NotTodo', notTodoSchema);

module.exports = NotTodo;
// name
// completed
// created_date