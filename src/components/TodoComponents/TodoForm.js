import React from 'react';


const TodoForm = ( { handleChange, handleSubmit } ) => {
        
 return (
    <form onSubmit={handleSubmit}>
        <input type='text' name='todo' onChange={handleChange} />
        <button>Add</button>
        <button>Clear Purchased</button>
    </form>
        );
}

export default TodoForm;