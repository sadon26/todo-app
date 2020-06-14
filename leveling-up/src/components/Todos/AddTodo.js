import React, { useState } from 'react'

const AddTodo = ({ addTodo }) => {
    const [todo, setTodo] = useState(
        { content: "" }
    )

    const handleTodo = (e) => {
        setTodo({ content: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        addTodo(todo)
        setTodo({ content: "" })
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label style={{ color: "green" }}><strong>Add Todo</strong></label><br />
                <input type="text" value={todo.content} onChange={handleTodo} />
                <button type="submit">Submit</button>
            </form>
        </div >
    )
}

export default AddTodo
