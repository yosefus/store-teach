import React, { useState, createContext } from 'react'
import { useContext } from 'react'

export const NamesContext = createContext()

export default function Context() {
   const [names, setNames] = useState(['avi', 'moshe'])

   return (
      <>
         <Names />
         <NamesContext.Provider value={names}>
            <div>
               <Names />
               <Names />
               <Names />
               <Names />
               <Names />
            </div>
         </NamesContext.Provider>
      </>
   )
}


function Names() {
   const names = useContext(NamesContext)

   return (<>
      {names?.map(name => <div key={name}>{name}</div>)}
   </>)
}