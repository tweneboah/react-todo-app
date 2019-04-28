import React, { Component } from 'react';

class TodoItem extends Component {
    
    render() { 
         const {items, clearList, handleDelete, handleEdit} = this.props
        return ( 
            <ul className='list-grpup my-5'>
                <h3 ></h3>
            </ul>
         );
    }
}
 
export default TodoItem;