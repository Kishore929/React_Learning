import React from 'react'

export default function ChildComp(props) {
  return (
    <div>
      {/* <button onClick={props.parentHandler}>Click me</button> */}
      <button onClick={ () => props.parentHandler('Child')}>Click me</button>

    </div>
  )
}
