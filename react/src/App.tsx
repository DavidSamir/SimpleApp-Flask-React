import { useState } from 'react'
import './App.css'
import TodoList from './compoments/todo';
import RepeaterForm from './compoments/Repeater';

function App() {


  return (
    <>
      <div className='wrapper'>
        <div>
          <h1>Text Repeater</h1>
          <RepeaterForm />
        </div>
        <div>
          <h1>To-do List</h1>
          <TodoList />
        </div>
      </div>
    </>
  )
}

export default App
