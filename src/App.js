import React from 'react';

import todos from './todos.js';

import { Container, Header, Divider } from 'semantic-ui-react';
import styled from 'styled-components';

import TodoForm from './components/TodoComponents/TodoForm.js';
import TodoList from './components/TodoComponents/TodoList.js';
import Stats from './components/TodoComponents/Stats.js';

const Main = styled.div`
  height: 100%;

  .ui.fluid.container {
    height: 100%;
  }
`;

const TopBar = styled.div`
  display: flex;
  justify-content: center;
  padding: 50px;
  background-color: #bb1333;
  
  .ui.header {
    color: white;
    font-size: 3rem;
  }
`;

const StatsBar = styled.div`
  display: flex;
  justify-content: center;
  padding: 15px;
`;

const AddTaskContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 20px;

  .ui.form {
    display: flex;

    .field input {
      width: 530px;
    }
  }

  .ui.basic.icon.button {
    position: absolute;
    height: 100%;
  }
`;

const UncompletedTasks = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  margin-bottom: 30px;

  .todo-label {
    font-size: 1.5rem;
  }
`;

const CompletedTasks = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  margin-bottom: 30px;

  .todo-label {
    font-size: 1.5rem;
  }
`;

const TaskSection = styled.div`
  background-color: #EFEFF3;
  height: 100%;
`;

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
  }

  clearCompleted = () => {
    this.setState({
      todos: this.state.todos.filter(todo => {
        return !todo.completed;
      })
    })
  }

  deleteTodo = (e, todoId) => {
    e.stopPropagation();
    this.setState({
      todos: this.state.todos.filter(todo => todo.id !== todoId)
    })
  }

  // completedTodos will be called inside of the todoList component as a prop, important to note however that we are NOT passing this FUNCTION down
  // as a prop, but rather we will be passing down the RESULT of calling this function as a prop. That way we can re use the TodoList component and have it render both the
  // completed todos and the uncompleted todos separately.
  completedTodos = (isCompleted) => {
    if(isCompleted) {
      return this.state.todos.filter(todo => todo.completed === true);
    } else {
      return this.state.todos.filter(todo => todo.completed === false);
    }
    
  }


  render() {
    return (
      <Main>
        <Container fluid>
          <TopBar>
            <Header as='h1'>Lambda ToDo</Header>
          </TopBar>
          
          <StatsBar>
            <Stats completedTodos={this.completedTodos} />
          </StatsBar>

          <TaskSection>
            <AddTaskContainer>
              <TodoForm handleChange={this.handleFormChanges} handleSubmit={this.handleFormSubmit} clearCompleted={this.clearCompleted} />
            </AddTaskContainer>

            <UncompletedTasks>
              <div className='todo-label'>Todo's</div>
              <TodoList completed={false} todos={this.completedTodos(false)} toggleCompleted={this.toggleCompleted} deleteTodo={this.deleteTodo} />
            </UncompletedTasks>

            <Divider />

            <CompletedTasks>
              <div className='todo-label'>Completed Todo's</div>
              <TodoList completed={true} todos={this.completedTodos(true)} toggleCompleted={this.toggleCompleted} deleteTodo={this.deleteTodo}  />
            </CompletedTasks>
          </TaskSection>
          
        </Container>
      </Main>
    );
  }
}

export default App;
