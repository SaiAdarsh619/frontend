import React from 'react';

export function DisplayTask(props){
   
    const handledelete = ()=>{
       props.deleteTask(props.task);
    }
   
    return (
    <div className='box'>
            <h3>{props.task}</h3>
            <button onClick={handledelete}>delete</button>
    </div>
  );
};


