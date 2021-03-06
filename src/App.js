import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'

import uuid from 'uuid';
import TodoInput from './components/TodoInput/TodoInput';
import TodoList from './components/TodoList/TodoList';
import AuthorNotes from './components/AuthorNotes/AuthorNotes'


class App extends React.Component {
  state = {
    items: [],
    id: uuid(),
    item: '', 
    editItem: false
  }

//METHODS
handleChange = (e) => {
  this.setState({
    item: e.target.value
  }) 
}

handleSubmit = (e) => {
  e.preventDefault()
  const newItem = {
    id: this.state.id,
    title: this.state.item
  }
  const updatedItems = [...this.state.items, newItem ]
  this.setState({
    items: updatedItems, 
    item: '',
    id: uuid(), 
    editItem: false
  }) 
}

clearList = () => {
  this.setState({
    items: []
  })
}

handleDelete = (id) => {
   const filteredItems = this.state.items.filter((item) => {
     return item.id !== id
   })

   this.setState({
     items: filteredItems
   })
}

handleEdit = (id) => {
  
  const filteredItems = this.state.items.filter((item) => {
    return item.id !== id
  })
  
  const selectedItem = this.state.items.find((item) => {
    return item.id === id
  })

  this.setState({
    items: filteredItems,
    item: selectedItem.title,
    editItem: true
  })
  console.log(selectedItem.title)
}



  render() { 
 
    return ( 
    <div className='bg bg-warning'>
         <div className='container'>
            <div className='row'>
              <div className='col-10 mx-auto col-md-8 mt-5'>
                  <h3 className='text-capitalize text-center'>Take Notes and never forget</h3>
                  <h3 className='text-capitalize text-center'>Time: {new Date().toLocaleTimeString()}</h3>
                 <hr/>
                  <TodoInput 
                  item={this.state.item} 
                  handleChange ={this.handleChange}
                  editItem={this.state.editItem}
                  handleSubmit ={this.handleSubmit}/>

                  <TodoList
                  items={this.state.items}
                  clearList = {this.clearList}
                  handleDelete={this.handleDelete}
                  handleEdit={this.handleEdit}
                  />

              </div>  
        
            </div>
          </div>
    </div>
     );
  }
}
 
export default App;

