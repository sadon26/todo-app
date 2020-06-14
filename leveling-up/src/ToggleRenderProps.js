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

    const { render } = props

    return (
        <div>
            {render({ on: state.on, toggle: toggle })}
        </div>
    )
}

export default Toggle
