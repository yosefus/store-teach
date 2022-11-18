import React from 'react'

export default function ListItem({ id, icon, name, price, children }) {
   return (
      <li className='item-card'>
         <p className="name">{name}</p>
         <p className="id"> id: {id}</p>
         <p className="icon"> {icon}</p>
         <p className="price">price: {price}$</p>
         {children}
      </li>
   )
}
