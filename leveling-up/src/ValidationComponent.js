import React from 'react'

const ValidationComponent = (props) => {
    const { textLength } = props
    return (
        <div>
            <p style={{ color: textLength > 5 ? "green" : "red" }}>{textLength > 5 ? "Text long enough" : "Text too short"}</p>
        </div>
    )
}

export default ValidationComponent
