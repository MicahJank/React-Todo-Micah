import React from 'react';

import Todo from './Todo.js';

const TodoList = ( { todos, toggleCompleted } ) => {

    if(!todos.length) {
        return (
            <h4>No todo's yet...</h4>
        );
    } else {
        return (
            <div>
                {todos.map(todo => {
                  return <Todo key={todo.id} todo={todo} toggleCompleted={toggleCompleted} />
                }) } 
            </div>
        )
    }
}

export default TodoList;
