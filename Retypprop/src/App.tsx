import React from 'react';
import logo from './logo.svg';
import './App.css';
import Addtodo from './Component/Addtodo';
import Appname from './Component/Name';
import Todoitem1 from './Component/Iteam1';
import Todoitem2 from './Component/Iteam2';

function App() {
  return (
    <div className="container">
      <Appname />
      <Addtodo />
      <Todoitem1 />
      <Todoitem2 />
    </div>
  );
}

export default App;
