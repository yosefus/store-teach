import React from 'react'
import { useEffect } from 'react'
import ListItem from './ListItem'

export default function Cart() {
   const items = [
      { id: 1, name: 'bread', icon: '馃崬', price: 3.5, category: 'food', inStock: 7 },
      { id: 2, name: 'orange', icon: '馃崐', price: 4, category: 'food', inStock: 6 },
      { id: 3, name: 'dog', icon: '馃惗', price: 5, category: 'animals', inStock: 9 },
      { id: 4, name: 'cat', icon: '馃惐', price: 7.8, category: 'animals', inStock: 1 },
      { id: 5, name: 'egg', icon: '馃', price: 1, category: 'food', inStock: 0 },
      { id: 6, name: 'giraffe', icon: '馃', price: 999, category: 'animals', inStock: 32 },
      { id: 7, name: 'lion', icon: '馃', price: 1, category: 'animals', inStock: 3 },
      { id: 8, name: 'carrot', icon: '馃', price: 15.3, category: 'food', inStock: 12 },
   ]

   const currentCategory = 'animals'
   const maxPrice = 0

   const filterdByCategory = currentCategory ? items.filter(item => item.category === currentCategory) : items
   const filterdByPrice = maxPrice ? filterdByCategory.filter(item => item.price < maxPrice) : filterdByCategory

   const categories = ['animals', 'food']


   useEffect(() => {
      fetch('https://fakestoreapi.com/products')
         .then(res => res.json())
         .then(json => console.log(json))
   }, [])

   return (
      <div className='body'>
         <ul className='list-items'>
            {filterdByPrice.map(({ id, category, icon, inStock, name, price }) =>
               <ListItem
                  key={id}
                  id={id}
                  category={category}
                  icon={icon}
                  name={name}
                  price={price}
               >
                  {/* 专讬谞讚讜专 诪讜转谞讛 + 拽诇讗住 诪讜转谞讛 */}
                  <p className={inStock ? 'stock' : 'nothing'}>
                     {inStock ? `in stock -${inStock}- items left` : 'nothing left...'}
                  </p>
               </ListItem>
            )}
         </ul>
      </div>
   )
}
