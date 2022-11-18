import React from 'react'
import PersonCard from './PersonCard'

export default function Persons() {
   const ppl =
      [
         { id: "12434", firstName: "sigal", lastName: "cohen" },
         { id: "124sdf4", firstName: "orit", lastName: "tzvi" },
         { id: "1ds2434", firstName: "dana", lastName: "levi" },
         { id: "12f434", firstName: "michal", lastName: "gad" },
         { id: "12sdf434", firstName: "meir", lastName: "cohen" },
         { id: "124s34f", firstName: "avi", lastName: "cohen" },
      ]

   // const obj = { name: 'avi', age: 87 }

   // const { name, age } = obj

   // console.log(name, age);

   return (
      <ul className='ppl-list'>
         {ppl && ppl.map((person) =>
            <PersonCard
               key={person.id}
               firstName={person.firstName}
               lastName={person.lastName}
            />)}
      </ul>
   )
}
