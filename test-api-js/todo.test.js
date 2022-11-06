

var todoservice = require('./todo.service.js');
describe('todo test suite', () => {

    test("truth_value", () => {
        expect(true).toBe(true);
    });
    
    let todo_service = new todoservice();

    test("if service instance is created", () => {
        expect(todo_service instanceof todoservice).toBe(true);
    });

    
    // Initial length of the todo list is 3 // 3 default tasks
    test("get_todos", () => {
        expect(todo_service.get_todos().todo.length).toEqual(3);
    });

   // Write all your test cases here that corresponds to software requirements  
    test("add_todo", () => {
        todo_service.add_todo({
            'title': 'Test Add Todo1',
            'description': '',
            'done': false
        })
        todo_service.add_todo({
            'title': 'Test Add Todo2',
            'description': '',
            'done': false
        })
        expect(todo_service.get_todos().todo.length).toEqual(5);
    });

    test("delete_todo", () => {
        expect(todo_service.delete_todo(5)).toEqual(false);
        expect(todo_service.delete_todo(6)).toEqual(false);
        expect(todo_service.delete_todo(4)).toEqual(true);
        expect(todo_service.get_todos().todo.length).toEqual(4);
    });

    test("update_todo", () => {
        expect(todo_service.update_todo(4, {
            'title': 'Updated title',
            'description': '',
            'done': true
        })).toEqual(false);
        expect(todo_service.update_todo(3, {
            'title': 'Updated title',
            'description': '',
            'done': true
        })).toEqual(true);
        expect(todo_service.get_todos().todo[3]).toEqual({
            'title': 'Updated title',
            'description': '',
            'done': true
        });
    });

    


});