import React from 'react'

const CharComponent = (props) => {
    const style = {
        display: "inline-block",
        padding: "16px",
        textAlign: "center",
        margin: "16px",
        border: "1px solid black"
    }

    const { userText, remove } = props
    return (

        <div onClick={remove} style={style}>
            {userText}
        </div>
    )
}

export default CharComponent
