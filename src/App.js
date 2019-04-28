import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import uuid from 'uuid';
import TodoInput from './components/TodoInput/TodoInput';
import TodoList from './components/TodoList/TodoList';


class App extends React.Component {
  state ={
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
    title: this.state.item,
    name:'Emmanuel'
  }
  const updatedItems = [...this.state.items, newItem ]
  this.setState({
    items: updatedItems, 
    item: '',
    id: uuid(), 
    editItem: false
  },() => console.log(this.state)) 
}

clearList = () => {
  console.log('Clear list')
}

handleDelete = (id) => {
   console.log(`handle delete' ${id}`)
}

handleEdit = (id) => {
  console.log(`handle edit ${id}`)
}



  render() { 
 
    return ( 
    <div>
         <div className='container'>
            <div className='row'>
              <div className='col-10 mx-auto col-md-8 mt-5'>
                  <h3 className='text-capitalize text-center'>Todo Input</h3>

                  <TodoInput 
                  item={this.state.item} 
                  handleChange ={this.handleChange}
                  edit={this.state.editItem}
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

