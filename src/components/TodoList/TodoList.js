import React, { Component } from 'react';
import TodoItem from '../TodoItem/TodoItem';

class TodoList extends Component {
    state = {  }
    render() { 
        return ( 
            <section>
                <h2>Todo List</h2>
                <TodoItem/>
            </section>
         );
    }
}
 
export default TodoList;