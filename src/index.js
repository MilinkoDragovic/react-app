import React from 'react'
import ReactDOM from 'react-dom'
import './style.css'


function Cartoon(props) {
        return <h1>Zdravo, {props.name} {props.show}</h1>
}

function Show (){
    return <div>
        <Cartoon name="Vladjimir" show="Bleso"/>
        <Cartoon name="Mili" show="Kralj"/>
    </div>
}

// class Cartoon extends React.Component {
//     render(){
//         return <h1>Hello {this.props.name}</h1>
//     }
// }

ReactDOM.render(
    <Show />,
    document.getElementById('app')
);


