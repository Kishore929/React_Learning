import React from 'react'
import Person from './Person';

function NameList() {
    const names = ['html', 'css', 'bootstrap', 'javascript']
    const persons = [
        {
            id: 1,
            name: 'kishore',
            age: 23,
            skill: 'html'
        },
        {
            id: 2,
            name: 'ramesh',
            age: 24,
            skill: 'css'
        },
        {
            id: 3,
            name: 'thirupathi',
            age: 25,
            skill: 'javascript'
        },
        {
            id: 4,
            name: 'gowtham',
            age: 26,
            skill: 'bootstrap'
        }
    ]
    // map method is for read all elements in the array and also we can handle each element through the arrow function by passing as an argument to map method
  return (
    <div>

      {/* <div>{names[0]}</div> */}
      { names.map(name => <h2>{name}</h2>) }

      {/* { persons.map(person => <h2>Iam {person.name}. i am {person.age}years old. I know {person.skill} </h2>) } */}

        {/* we can pass person obj to another file through props and we need to pass any key value to unique info and also must use with in the curly braces */}
      { persons.map(person => <Person key = {person.id} person = {person}/>) }

        {/* most of the time we should use key as an id we don't use index */}
      { names.map((name,index) => <h2>{index} {name}</h2>) }
      
    </div>
  )

// const personsList = persons.map(person => <h2>Iam {person.name}. i am {person.age}years old. I know {person.skill} </h2>)
// return personsList;

}

export default NameList;
