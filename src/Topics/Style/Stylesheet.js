import React from 'react'
import './myStyle.css'

export default function Stylesheet(props) {
    const ClassName = props.primary ? 'primary' : ''

    // we can use two class name to style the element
  return (
    <div>
      <h1 className={`${ClassName} font-xl`}>Style sheet</h1>
    </div>
  )
}
