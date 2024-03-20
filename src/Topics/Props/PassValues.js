import React from 'react'

// export default function PassValues(props) {
//     console.log(props)
//   return (
//     <div>
//       <h1>Hello {props.fname} , {props.lname}</h1>
//     </div>
//   )
// }

// export default function PassValues({fname, lname}) {
//     return (
//       <div>
//         <h1>Hello {fname} , {lname}</h1>
//       </div>
//     )
// }

export default function PassValues(props) {
  console.log(props)
  const {fname, lname} = props
  return (
    <div>
      <h1>Hello {fname} , {lname}</h1>
    </div>
  )
}
