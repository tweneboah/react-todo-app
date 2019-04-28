import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import uuid from 'uuid';
import TodoInput from './components/TodoInput/TodoInput';
import TodoList from './components/TodoList/TodoList';


class App extends React.Component {
  state ={
    items: [
      {id: 1, title: 'Wake up'},
      {id: 2, title: 'Wake up'},
      {id: 3, title: 'Wake up'},
      {id: 4, title: 'Wake up'},
      {id: 5, title: 'Wake up'},
    ],
    id: uuid(),
    item: '',
    editItem: false
  }

//METHODS
handleChange = (e) => {
  console.log('Handle change')
}

handleSubmit = () => {
  console.log('handle submit');
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
                  item={this.state.items} 
                  handleChange ={this.handleChange}
                  edit={this.state.editItem}/>

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

