import React, { useState, createContext } from 'react'
import Cart from "./Cart"
import './cart.css'
import Store from './Store'

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

export const StoreContext = createContext()
export const CartContext = createContext()


export default function CartApp() {
   const [category, setCategory] = useState('')
   const [itemsStore, setItemsStore] = useState(items)
   const [itemsCart, setItemsCart] = useState([])

   return (
      <StoreContext.Provider value={{ itemsStore, setItemsStore }}>
         <CartContext.Provider value={{ itemsCart, setItemsCart }} >
            <div className='body'>
               <div className="container">
                  <Cart itemsCart={itemsCart} />
                  <Store categories={categories} setCategory={setCategory} category={category} />
               </div>
            </div>
         </CartContext.Provider>
      </StoreContext.Provider>
   )
}
{/* <div className="form">
   <form onSubmit={() => console.log('add')}>
      <h3>create new one</h3>
      <input type="text" placeholder='id' name='id' />
      <input type="text" placeholder='name' name='name' />
      <input type="text" placeholder='icon' name='icon' />
      <input type="number" placeholder='price' name='price' />
      <input type="submit" value='create' />
   </form>
</div> */}
