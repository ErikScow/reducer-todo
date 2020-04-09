import React from 'react'

const TodoItem = (props) => {
    return (
        <div
            className={`${props.completed ? 'completed' : ''}`}
            onClick={()=> props.toggleCompleted(props.payload.id)}
        >
            <p>{props.item}</p>
        </div>
    )
}

export default TodoItem