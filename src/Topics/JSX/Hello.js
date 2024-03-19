import React from 'react'

const Hello = () => {

    // With JSX
  return (
    <div>
      <h1>Hello kishore</h1>
    </div>
  )


    // Without JSX
   // return React.createElement('div', {id: 'hello', className: "dummyclass"}, React.createElement('h1', null, 'hello kishore'))


}

export default Hello
