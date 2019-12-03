import React from 'react';

import './Todo.css'

const Todo = params => {
    const thisTodo = params.todo;
    console.log(thisTodo)
    
    const handleClick = (e) => {
        thisTodo.completed = !thisTodo.completed
    }

    return (
        <div className='todo'>
            <p
                onClick={() => params.handleClick(thisTodo.id)}
                className={thisTodo.completed ? 'completed' : 'not-completed'}
            >{thisTodo.item}</p>
            
        </div>
    );
}

export default Todo;