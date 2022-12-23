import React, { useContext } from 'react'
import { CartContext, StoreContext } from '.'

export default function ItemCart({ item }) {
   const { id, name, icon, price, amount } = item
   const { itemsStore, setItemsStore } = useContext(StoreContext)
   const { itemsCart, setItemsCart } = useContext(CartContext)

   function deleteFromCart(id) {
      // delete if amount === 0
      if (item.amount === 1) setItemsCart(itemsCart.filter(it => it.id !== id))
      // reduce the amount in cart
      else setItemsCart(itemsCart.map(it => it.id === id ? { ...it, amount: it.amount - 1 } : it))
      // add one back to the store
      setItemsStore(itemsStore.map(it => it.id === id ? { ...it, inStock: it.inStock + 1 } : it))
   }

   return (
      <li key={id}>
         <div className="icon">{icon}</div>
         <div className="name">{name}</div>
         <div className="num">-{amount}-</div>
         <div className="price">{price}$</div>
         <button onClick={() => deleteFromCart(id)} className="delete">💀</button>
      </li>
   )
}
