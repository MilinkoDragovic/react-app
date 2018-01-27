import React from 'react'
import ReactDOM from 'react-dom'
import './style.css'

setInterval(function () {
    ReactDOM.render(
        <h2>Current time: {new Date().toLocaleTimeString()}</h2>,
        document.getElementById('app')
    );
}, 1000);

