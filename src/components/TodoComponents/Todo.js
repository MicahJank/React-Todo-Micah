import React from 'react';

import { Button, List, Icon } from 'semantic-ui-react';
import styled from 'styled-components';


const Task = styled.div`
   display: flex;
   justify-content: space-between;
   align-items: baseline;
   width: 60%;
   margin: 20px auto;
   padding: 10px;
   background-color: #fff;
   cursor: pointer;


   div {
       display: flex

       .circle.icon {
           margin-right: 20px;
       }
   }

   .ui.button {
    background-color: #bb1333;
    color: #fff;
}
`;

const Todo = ( { todo, toggleCompleted } ) => {
    return (
        <Task onClick={() => toggleCompleted(todo.id)}>
            <div>
                <Icon name='circle' />
                <p>{todo.task}</p>
            </div>
            <Button>Delete</Button>
        </Task>
    );
}

export default Todo;