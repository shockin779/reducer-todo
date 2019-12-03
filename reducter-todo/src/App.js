import React from 'react';

import Todos from './components/Todos/Todos';

import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className='title'>My Todo List</h1>
        <Todos />
      </header>
      
    </div>
  );
}

export default App;
