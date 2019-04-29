import React, { Component } from 'react';
import TodoItem from '../TodoItem/TodoItem';

class TodoList extends Component {
    state = {  }
    render() { 
        const {items, clearList, handleDelete, handleEdit} = this.props
        return ( 
            <ul className='list-grpup my-5'>
                <h3 className='text-center'>Your total todo is <span class="badge badge-secondary">{items.length}</span></h3>
                <hr/>
                {items.map((item) => {
                    return (
                        <TodoItem key={item.id} title={item.title} handleDelete={()=>handleDelete(item.id)} handleEdit={()=>handleEdit(item.id)}/>
                    )
                })}
                <button type='button' className='btn btn-danger' onClick={clearList}>Clear List</button>
            </ul>
         );
    }
}
 
export default TodoList;