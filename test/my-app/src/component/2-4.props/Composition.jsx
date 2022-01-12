// rfc 탭!
import React from 'react'

function Welcome(props) {
    return <h1>Hello, {props.name}</h1>
}
export default function Composition() {
    return (
        <div>
            <Welcome name="hong" />
            <Welcome name="kim" />
            <Welcome name="oh" />
            <Welcome name="yoon" />
        </div>
    )
}
