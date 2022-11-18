import React, { useState } from 'react'

const items = [
   { id: 1, name: 'bread', icon: '🍞', price: 3.5, category: 'food', inStock: 7 },
   { id: 2, name: 'orange', icon: '🍊', price: 4, category: 'food', inStock: 6 },
   { id: 3, name: 'dog', icon: '🐶', price: 5, category: 'animals', inStock: 9 },
   { id: 4, name: 'cat', icon: '🐱', price: 7.8, category: 'animals', inStock: 1 },
   { id: 5, name: 'egg', icon: '🥚', price: 1, category: 'food', inStock: 0 },
   { id: 6, name: 'giraffe', icon: '🦒', price: 999, category: 'animals', inStock: 32 },
   { id: 7, name: 'lion', icon: '🦁', price: 1, category: 'animals', inStock: 3 },
   { id: 8, name: 'carrot', icon: '🥕', price: 15.3, category: 'food', inStock: 12 },
]

const categories = ['animals', 'food']

export default function Cart() {
   const [category, setCategory] = useState('')

   return (
      <div className='body'>
         <ul className='categories'>
            {categories.map(c => <li onClick={() => setCategory(c)} key={c}>{c}</li>)}
            <li onClick={() => setCategory()}>all</li>
         </ul>
         <ul className='list-items'>
            {items
               .filter(item => !category ? true : item.category === category)
               .map(item =>
                  <li className='item-card' key={item.id}>
                     <h3 className='name'> {item.name}</h3>
                     <p className='id'>id: {item.id}</p>
                     <p className='icon'>{item.icon}</p>
                     <p className='price'>{item.price}$</p>
                     {item.inStock ? <p className='stock'>in stock -{item.inStock}- items</p> : <p className='nothing'> nothing left for you...</p>}
                  </li>
               )}
         </ul>
      </div>
   )
}
