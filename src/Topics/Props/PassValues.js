import React from 'react'

export default function PassValues(props) {
    console.log(props)
  return (
    <div>
      <h1>Hello {props.fname} , {props.lname}</h1>
    </div>
  )
}
