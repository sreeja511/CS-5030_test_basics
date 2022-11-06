class todoservice{
    todo_data = {
        "todo":[{
            "title": "T1",
            "description": "D1",
            "done": false
        },{
            "title": "T1",
            "description": "D1",
            "done": false
        },{
            "title": "T1",
            "description": "D1",
            "done": false
        }]
    }
    constructor(){
        this.todos=this.todo_data;
    }

    get_todos(){
        return this.todos;
    }

    add_todo(todo){
        this.todos.todo.push(todo);
        return true;
    }

    delete_todo(id){
        // Your code here
        if (this.todos.todo.length <= id) return false;
        this.todos.todo.pop(id);
        return true;
    }

    update_todo(id, todo){
        // Your code here
        if (this.todos.todo.length <= id) return false;
        this.todos.todo[id] = todo;
        return true;
    }
}


module.exports= todoservice;