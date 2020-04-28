import React, { Component } from 'react'
import propTypes from 'prop-types'


export class TodoItems extends Component {

    getStyle = () => {
        return {
        textDecoration: this.props.todo.completed ? 'line-through' : 'none',
        background: 'lightGreen',
        padding: '10px',
        borderBottom: '2px solid green',
        width: '800px'
        }

    }

    render() {
        const {id, task} = this.props.todo
        return (
            <div style={this.getStyle()}>
              <p>
                  <input 
                    type="checkbox" 
                    onChange={this.props.markComplete.bind(this, id)}
                  /> {' '}
                  {task}
                  <button 
                    type="button" 
                    style={btnStyle} 
                    onClick={this.props.delTodo.bind(this, this.props.todo, id)}
                  >X</button>
              </p>                
            </div>
        ) 
    }
}

//propType
TodoItems.propTypes = {
    todo: propTypes.object.isRequired
}

let btnStyle = {
    background: '#ff0000',
    color: '#fff',
    border: 'none',
    padding: '5px, 9px',
    borderRadius: '50%',
    cursor: 'pointer',
    float: 'right' 
}

export default TodoItems
