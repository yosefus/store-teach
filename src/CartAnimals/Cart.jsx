import { useContext } from 'react'
import { CartContext } from '.'
import ItemCart from './ItemCart'

export default function Cart() {
   const { itemsCart } = useContext(CartContext)

   function calcCart(arrItems = []) {
      // let sum = 0
      // arrItems.forEach(item => sum += (item.price * item.amount))
      // return sum

      return arrItems.reduce((acc, curr) => acc += (curr.price * curr.amount), 0)
   }

   const sumCart = calcCart(itemsCart)

   return (
      <div className="cart">
         <h2>cart:</h2>
         {!itemsCart.length ?
            <p style={{ color: 'red' }}>nothing here yet...</p> :
            <ul className='cart-list'>
               {itemsCart.map(item => <ItemCart item={item} key={item.id} />)}
               <li> sum: {sumCart} $ </li>
            </ul>
         }
      </div>
   )
}
