import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';

function App() {
  const[newItem, setnewItem] = useState("")
  const[todos, settodos] = useState([])

  function handleSubmit(e){
    // prevenes reload of the page.
    e.preventDefault()

    settodos((currentTodos) => {
      return [
        ...currentTodos,
        {
          id: crypto.randomUUID(), title:newItem, completed:false
        },
      ]
    })

    //to clear the input boxes.
    setnewItem("")
  }

  function deletehander(id){
    settodos(currentTodos => {
      return currentTodos.filter(todo => todo.id != id)
    })

  }

  return (
    <>
   <form onSubmit={handleSubmit} className="new-item-form">
    <div className="form-row">
      <label htmlFor="item">New Item</label>
      <input 
      type="text" 
      id="item"
      value={newItem}
      onChange={e => setnewItem(e.target.value)}
       />
    </div>

    <button className="btn">Add</button>
    <h1 className="header">To Do list</h1>
    <ul className="list">

      {todos.map((todo) => {
        return <li key={todo.id}>
        <label>
          <input type="checkbox" checked={todo.completed}/>
          {todo.title}
        </label>

        <button 
        className="btn btn-dangert"
        onClick={() => deletehander(todo.id)}

        >
          Delete</button>
      </li>
      })}
      
    </ul>
   </form>
   </>
  );
}

export default App;
 