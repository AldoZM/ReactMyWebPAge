import React from 'react';
import './App.css'
function Tweet(prop) {
    return (

        <div className='tweet'>
            <div className='name'>
                <h3>{prop.name}</h3>
            </div>
            <p>{prop.mes}</p>
            <a href="https://www.twitch.tv/arudoz" target="_blank">Aqui puedes acceder a mi cuenta</a>
        </div>
    )


}
export default Tweet;