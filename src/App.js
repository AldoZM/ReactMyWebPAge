import React from 'react';
import ButtonHello from './Button'
import './App.css'
import Tweet from './Tweet'
function App() {
  const sayHello = () => {
    console.log("hello");
  };
  return (

    <div class = 'app'>
      <div class = 'sectionY' contenteditable>
        Min: 150 px / Max 25%
      </div>
      <div class = 'sectionP' contenteditable>
        This element take the second grid position 
      </div>
    </div>
  );
}

export default App;
