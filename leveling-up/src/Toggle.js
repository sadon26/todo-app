import React, { useState } from 'react'

const Toggle = (props) => {
    const [state, setState] = useState({
        on: false
    })

    const toggle = () => {
        setState({
            on: !state.on
        })
    }

    return (
        <div>
            {state.on && (
                <h1>Hello</h1>
            )}
            <button onClick={toggle}>Show/Hide</button>
        </div>
    )
}

export default Toggle
