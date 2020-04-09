import React, { useState, useReducer } from 'react'

import { reducer, todo } from '../reducers/reducer'

import TodoItem from './TodoItem'

const TodoForm = () => {
    //state for new item
    const [state, dispatch] = useReducer(reducer, todo)

    //function toggling
    const toggleTodo = todoId => {
        dispatch({
            type: 'toggle_completed',
            payload: todoId
        })
    }

    //state for text being input before submition
    const [newItem, setNewItem] = useState('')

    const submitHandler = e => {
        e.preventDefault()
        dispatch({type: 'add_item', payload: newItem})
        setNewItem('')
    }
    const changeHandler = e => {
        setNewItem(e.target.value)
    }
console.log('state.list: ', state.list)
    return (
        <div>
            <form onSubmit={submitHandler}>
                <input
                type='text'
                value={newItem}
                placeholder='Add Something To Do...'
                onChange={changeHandler}
                />
                <button type='submit'>Add</button>
                <br/>
                <button type='button' onClick={() => dispatch({type: 'clear_completed'})}>Clear Completed</button>
            </form>
        
            <div className='TodoList'>
                {state.list.map( item => {
                    return (        
                    <div
                        className={`${item.completed ? 'completed' : ''}`}
                        onClick={()=> toggleTodo(item.id)}
                    >
                        <p>{item.item}</p>
                    </div>)
                    }) 
                }
            </div>
        </div>
    )
}

export default TodoForm