import React from 'react';

import Test from './Test';
import TodoApp from './TodoApp';

import './App.css';

function App() {
  return (
    <div className="App">
      {/* <Test/> */}
      <TodoApp/>
    </div>
  );
}

export default App;

// - TodoApp
//   - TodoForm
//   - TodoList
//     - TodoItem
