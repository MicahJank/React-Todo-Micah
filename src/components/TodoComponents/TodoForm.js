import React from 'react';


const TodoForm = ( { handleChange, handleSubmit, clearCompleted } ) => {
        
 return (
    <form onSubmit={handleSubmit}>
        <input type='text' name='todo' onChange={handleChange} />
        <button>Add</button>
        <button onClick={clearCompleted}>Clear Completed</button>
    </form>
        );
}

export default TodoForm;