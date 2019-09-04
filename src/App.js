import React from 'react';

import todos from './todos.js';

import TodoForm from './components/TodoComponents/TodoForm.js';
import TodoList from './components/TodoComponents/TodoList.js';

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      todos,
      todoName: ''
    }
  }

  // handler function will be passed down to TodoForm through props
  handleFormChanges = (e) => {
    this.setState({
      todoName: e.target.value
    })
  }


  addItem = (e, taskName) => {
    e.preventDefault();
    const newTask = {
      task: taskName,
      id: Date.now(),
      completed: false
    };
    this.setState({
      todos: [...this.state.todos, newTask],
      todoName: ''
    });
  }

  
  handleFormSubmit = (e) => {
    this.addItem(e, this.state.todoName);
    this.setState({
      todoName: ''
    })
  }

  toggleCompleted = (todoId) => {
    this.setState({
      todos: this.state.todos.map(todo => {
        return todo.id === todoId ? {...todo, completed: !todo.completed} : todo;
      })
    })
    console.log()
  }

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <h3>Todo's</h3>
        <TodoForm handleChange={this.handleFormChanges} handleSubmit={this.handleFormSubmit} />
        <TodoList todos={this.state.todos} toggleCompleted={this.toggleCompleted} />
      </div>
    );
  }
}

export default App;
