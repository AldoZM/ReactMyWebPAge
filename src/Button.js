import React from 'react';

function ButtonHello(){
    const sayHello = () =>{
    console.log("hello");
    };
    return(
        <div>
            <h3>This is the Button component</h3>
                <button onClick={sayHello}>Hello</button>
        </div>
    );

}

export default ButtonHello;