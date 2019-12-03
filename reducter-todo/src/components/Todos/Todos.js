import React, {useReducer, useState} from 'react';
import {initialState, todoReducer} from '../../reducers/index';

import Todo from '../Todo/Todo';

const Todos = () => {
    const [todos, dispatch] = useReducer(todoReducer, initialState);
    const [newTodoText, setNewTodoText] = useState('');

    const handleChanges = e => {
        setNewTodoText(e.target.value);
    };

    const handleClick = (todoId) => {
        let isTodo = false;
        let todoIndex;
        todos.find((todo, index) => {
            if(todo.id === todoId) {
                isTodo = true;
                todoIndex = index;
            }
        })
        if(isTodo) {
            dispatch({type: 'TOGGLE_TODO_STATUS', payload: {index: todoIndex}});
        }
        
    }

    return (
        <div className='todos-section'>
            <div className='todo-form-wrapper'>
                <form>
                    <input type='text' placeholder='New ToDo' value={newTodoText} onChange={handleChanges}></input>
                    <button onClick={(e) => {
                        e.preventDefault();
                        dispatch({type: 'ADD_TODO', payload: {item: newTodoText, id: Date.now(), completed: false}});
                        setNewTodoText("");
                    }}>Add Todo</button>
                    <button onClick={(e) => {
                        e.preventDefault();
                        dispatch({type: 'CLEAR_COMPLETED', payload: ''});
                    }}>Clear Completed</button>
                </form>
            </div>
            <div className='todos-wrapper'>
                {
                    todos.map(item => <Todo handleClick={handleClick} todo={item} key={item.id} />)
                }
            </div>
        </div>
    );
}

export default Todos;