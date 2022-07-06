import React from 'react';
import './App.css';
import TodoList from './components/TodoList';
import Labellogin from './components/Labellogin';
import Labelsenha from './components/Labelsenha';
import Entrega from './components/EntregaList';

function App() {
  return (
    <>
    <div className='semi-app'>
    <h1>Login</h1>
      <Labellogin/>
      <Labelsenha/>
    </div>

    <div className='todo-app'>
      <TodoList/>
    </div>
    <div className='todo-app'>
      <Entrega/>
    </div>
    </>
  );
}

export default App;
