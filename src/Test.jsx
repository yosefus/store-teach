import React from 'react'
import Animal from './Animal'

function Test() {
   const animals = [
      { name: 'lion', href: '/' },
      { name: 'cat', href: '/' },
      { name: 'dog', href: '/' },
      { name: 'lion', href: '/' }
   ]

   return (
      <div>
         <ul className='animal-list'>
            {animals.map((animal, index) => {
               return (
                  <Animal key={animal.name + index} name={animal.name} href={animal.href} index={index} >
                     jjjj
                  </Animal>
               )
            })}
         </ul>
      </div>
   )
}

export default Test



