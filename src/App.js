import React from 'react';
import ButtonHello from './Button'
import './App.css'
import Tweet from './Tweet'
function App(){
  const sayHello = () =>{
    console.log("hello");
  };
  return(
  
    <div className='app'>
      <Tweet name = 'Aldo' mes = 'Hola'/>
      <Tweet name= 'Zetina' mes = 'Como'/>
      <Tweet name = 'Muciño' mes = 'Estas'/>
    </div>
  );
}

export default App;