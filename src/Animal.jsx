import React from 'react'

export default function Animal(props) {
   const { name, children } = props
   console.log(props);

   return (
      <li>
         <h3>{name}</h3>
         <p>{children}</p>
      </li>
   )
}
