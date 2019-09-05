import React from 'react';

import { Button, List, Icon } from 'semantic-ui-react';
import styled from 'styled-components';


const Task = styled.div`
   display: flex;
   justify-content: space-between;
   align-items: center;
   width: 60%;
   margin: 20px auto;
   padding: 10px;
   background-color: #fff;
   cursor: pointer;


   div {
       display: flex
       align-items: baseline; 

       .circle.icon {
           margin-right: 20px;
       }

       p {
           font-size: 1.5rem;
       }
   }

   .ui.button {
    background-color: #bb1333;
    color: #fff;
}
`;

const Todo = ( { todo, toggleCompleted, completed, deleteTodo } ) => {
    return (
        <Task onClick={() => toggleCompleted(todo.id)}>
            <div>
                <Icon color={completed ? 'green' : 'red'} name='circle' />
                <p>{todo.task}</p>
            </div>
            <Button onClick={(e) => deleteTodo(e, todo.id)}>Delete</Button>
        </Task>
    );
}

export default Todo;