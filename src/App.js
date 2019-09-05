import React from 'react';

import todos from './todos.js';

import { Container, Header } from 'semantic-ui-react';
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
  margin: 15px 10px;
`;

const UncompletedTasks = styled.div`
  display: flex;
  flex-direction: column;
`;

const CompletedTasks = styled.div`
  display: flex;
  flex-direction: column;
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
            <Stats />
          </StatsBar>

          <TaskSection>
            <AddTaskContainer>
              <TodoForm handleChange={this.handleFormChanges} handleSubmit={this.handleFormSubmit} clearCompleted={this.clearCompleted} />
            </AddTaskContainer>

            <UncompletedTasks>
              <TodoList todos={this.completedTodos(false)} toggleCompleted={this.toggleCompleted} />
            </UncompletedTasks>

            <CompletedTasks>
              <TodoList todos={this.completedTodos(true)} toggleCompleted={this.toggleCompleted} />
            </CompletedTasks>
          </TaskSection>
          
        </Container>
      </Main>
    );
  }
}

export default App;
