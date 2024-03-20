import React from 'react'

export default function FunctionClick() {
    function clickHandle(){
        console.log('button clicked')
    }
  return (
    <div>
      <button onClick={clickHandle}>Click</button>
    </div>
  )
}
