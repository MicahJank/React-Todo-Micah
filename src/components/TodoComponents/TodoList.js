import React from 'react';

import Todo from './Todo.js';

import { Button, List} from 'semantic-ui-react';
import styled from 'styled-components';

const Todos = styled.div`

    .item.list-item {
        display: flex;
    }
`;

const TodoList = ( { todos, toggleCompleted } ) => {

    if(!todos.length) {
        return (
            <h4>No todo's yet...</h4>
        );
    } else {
        return (
            <Todos>
                    {todos.map(todo => {
                    return (
                        <Todo key={todo.id} todo={todo} toggleCompleted={toggleCompleted} />   
                    );
                    }) } 
            </Todos>
        )
    }
}

export default TodoList;
