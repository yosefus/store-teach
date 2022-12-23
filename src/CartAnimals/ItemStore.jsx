import React from 'react'
import { useContext } from 'react'
import { CartContext, StoreContext } from '.'

export default function ItemStore({ item = {} }) {
   const { id, name, icon, price, inStock } = item
   const { itemsStore, setItemsStore } = useContext(StoreContext)
   const { itemsCart, setItemsCart } = useContext(CartContext)


   function addToCart(id) {
      if (!inStock) return;

      const foundInCart = itemsCart.find(it => it.id === id)

      // add new one to cart if not there
      if (!foundInCart)
         setItemsCart(old => {
            const newItem = { ...item, amount: 1 }
            delete newItem.inStock
            return [...old, newItem]
         })
      // add amount to exict one
      else
         setItemsCart(old => old.map(it => it.id == id ? { ...it, amount: it.amount + 1 } : it))


      // reduce in stock from the store item
      setItemsStore(itemsStore.map(it => it.id === id ? { ...it, inStock: it.inStock - 1 } : it))
   }


   return (
      <li className='item-card' >
         <h3 className='name'> {name}</h3>
         <p className='id'>id: {id}</p>
         <p className='icon'>{icon}</p>
         <p className='price'>{price}$</p>
         {inStock ? <p className='stock'>in stock -{inStock}- items</p> : <p className='nothing'> nothing left for you...</p>}

         <div className='btns'>
            <button onClick={() => addToCart(id)} disabled={!inStock}  >add to cart</button>
         </div>
      </li>
   )
}
