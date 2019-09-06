import React from 'react';

import { Button, Icon, Form} from 'semantic-ui-react';


const TodoForm = ( { handleChange, handleSubmit, clearCompleted, todoName } ) => {
        
 return (
    <Form size='huge' onSubmit={handleSubmit}>
        
        <Form.Field>
            <Button size='huge' basic icon='plus'></Button>
            <input type='text' name='todo' value={todoName} onChange={handleChange} placeholder='New Todo...' />
        </Form.Field>
    </Form>
        );
}

export default TodoForm;