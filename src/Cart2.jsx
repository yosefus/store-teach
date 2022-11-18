import React from 'react'
import ListItem from './ListItem'

export default function Cart2() {
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


   return (
      <div className='body'>
         <ul className='list-items'>
            {items.map(({ id, category, icon, inStock, name, price }) =>
               <ListItem
                  key={id}
                  id={id}
                  category={category}
                  icon={icon}
                  name={name}
                  price={price}
               >
                  {/* רינדור מותנה + קלאס מותנה */}
                  <p className={inStock ? 'stock' : 'nothing'}>
                     {inStock ? `in stock -${inStock}- items left` : 'nothing left...'}
                  </p>
               </ListItem>
            )}
         </ul>
      </div>
   )
}