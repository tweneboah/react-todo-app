import React, { Component } from 'react';
class TodoInput extends Component {
    
    render() { 
        //DESTRUCTURING
  const {item, handleChange, handleSubmit, editItem} = this.props
        
        return ( 
          
            <div className="card card-body my-3">
            <form onSubmit={handleSubmit}>
              <div className="input-group">
                <div className="input-group-prepend">
                  <div className="input-group-text bg-primary text-white">
                    <i className="fas fa-book" />
                  </div>
                </div>
                <input
                  type="text"
                  className="form-control text-capitalize"
                  placeholder="add todo item"
                  value={item}
                  onChange={handleChange}
                />
              </div>
              <button  disabled={item?false: true}
                type="submit"
                className={editItem? "btn btn-block btn-warning mt-3 text-uppercase": "btn btn-block btn-danger mt-3 text-uppercase"}>
                {editItem? 'Edit Todo': 'Add Todo'}
              </button>
            </form>
          </div>
         );
    }
}
 
export default TodoInput;