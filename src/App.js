import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import uuid from 'uuid';
import TodoInput from './components/TodoInput/TodoInput';
import TodoList from './components/TodoList/TodoList';


class App extends React.Component {
  
  render() { 
    return ( 
    <div>
         <div className='container'>
            <div className='row'>
               <TodoInput/>
               <TodoList/>

            </div>
          </div>
  
    </div>
     );
  }
}
 
export default App;

