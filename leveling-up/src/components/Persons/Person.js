import React from 'react'
import './Person.css'

const Person = (props) => {
    const { name, age, children, click, changed } = props
    return (
        <div className="Person">
            <p onClick={click}>I am {name} and I'm {age} years old</p>
            <p>{children}</p>
            <input type="text" onChange={changed} value={name} />
        </div>
    )
}

export default Person
