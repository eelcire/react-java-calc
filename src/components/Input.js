import React from 'react'
import "../styles/Input.css"

export const Input = props => (
    <div>
        <div className = "previous">{props.previous}</div>
        <div className = "input">{props.input}</div>
    </div>
)