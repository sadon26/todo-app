import React from 'react'
import './Todos.css'

const Todos = ({ todos, deleteTodo }) => {

    return (
        <div className="todos-wrapper-container">
            {todos.map((todo, index) => (
                <div onClick={() => deleteTodo(index)} className="todos-wrapper">
                    <p key={todo.id} className="todos">{todo.content}</p>
                </div>
            ))}
        </div>
    )
}

export default Todos
