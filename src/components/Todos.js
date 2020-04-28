import React, { Component } from 'react';
import TodoItems from './TodoItems'
import propTypes from 'prop-types'

class Todos extends Component {

      todos= this.props.todos;

      render() {
            return this.todos.map((todo)=> (
                <TodoItems 
                key={todo.id} 
                todo={todo} 
                markComplete={this.props.markComplete}
                delTodo={this.props.delTodo}
                />
            ))
      }
}
//propType
Todos.propTypes = {
    todos: propTypes.array.isRequired
}


export default Todos;
 