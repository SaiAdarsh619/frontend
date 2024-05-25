import React from 'react';
import '../App.js'
import './header.css'

export function Newhtml({word}) {
  return (
    <h1>{word}</h1>
  );
}

/*export function Submit()
{
    return(
        <button onClick={<Newhtml/>}>submit</button>
    )
}*/

// newhtml.js
export function Alert() {
  return(
  alert("Button was clicked!")
  );
};

