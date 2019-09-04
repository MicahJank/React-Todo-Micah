import React from 'react';

import styled from 'styled-components';


const Task = styled.div`
    .completed {
        text-decoration: line-through;
    }
`;

const Todo = ( { todo, toggleCompleted } ) => {
    console.log(todo.completed);
    return (
        <Task onClick={() => toggleCompleted(todo.id)}>
            <p className={`task ${todo.completed ? 'completed' : ''}`}>{todo.task}</p>
        </Task>
    );
}

export default Todo;