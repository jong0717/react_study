import React from 'react'
Dialog.Title = (props) => {
    return (
        <div>
            <h1>
                {props.title}
            </h1>
        </div>
    )
}
Dialog.Description = (props) => {
    return (
        <div>
            <p>{props.content}</p>
        </div>
    )
}
export default function Dialog({children}) {
    return (
        <div style={{backgroundColor: "pink"}}>
            {children}
        </div>
    )
}
