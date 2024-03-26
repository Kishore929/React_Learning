import React from 'react'

export default function Person({person}) {
  return (
    <div>
      <h2>Iam {person.name}. i am {person.age}years old. I know {person.skill} </h2>
    </div>
  )
}
