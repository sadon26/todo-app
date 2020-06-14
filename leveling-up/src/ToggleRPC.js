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

    const { children } = props

    return (
        children({ on: state.on, toggle: toggle })
    )
}

export default Toggle
