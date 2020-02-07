import React from 'react';

export default function header(props) {
    return(
        <header className="App-header">
            <h1> {props.title}</h1>
        </header>
    )
}