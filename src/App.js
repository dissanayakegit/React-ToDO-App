import React, { Component } from 'react';
import Todos from './components/Todos'

class App extends Component {

  state = {
    todos: [
      {
        id : 1,
        task : 'somethig1',
        completed: true
      },
      {
        id : 2,
        task : 'somethig2',
        completed: false
      },
      {
        id : 3,
        task : 'somethig3',
        completed: true
      },
    ]
  }
  //Toggle Complete
  markComplete = (id) => {
    this.setState({todos: this.state.todos.map((todo) => {
      if(todo.id === id){
        todo.completed = !todo.completed
      }
      return todo;
    })})
  }

  deleteTodo = (todo, id) => {
    console.log(todo, id);
    this.setState(
      {
        todos: [...this.state.todos.filter(todo => todo.id != id)]
      }
    );
  }

  render() {
    return (
      <div className="App">
        <Todos 
          todos={this.state.todos} 
          markComplete={this.markComplete}
          delTodo={this.deleteTodo}
        /> 
      </div>
    );
  }
}

export default App;
