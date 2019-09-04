import React from 'react';

import Todo from './Todo.js';

const TodoList = ( { todos } ) => {

    if(!todos.length) {
        return (
            <h4>No todo's yet...</h4>
        );
    } else {
        return (
            <div>
                {todos.map(todo => {
                  return <Todo key={todo.id} todo={todo} />
                }) } 
            </div>
        )
    }
}

export default TodoList;
