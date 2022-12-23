import React, { useContext } from 'react'
import { StoreContext } from '.'
import ItemStore from './ItemStore'

export default function Store({ categories, setCategory, category }) {
   const { itemsStore } = useContext(StoreContext)

   return (
      <div className="store">
         <ul className='categories'>
            {categories.map(c => <li onClick={() => setCategory(c)} key={c}>{c}</li>)}
            <li onClick={() => setCategory()}>all</li>
         </ul>
         <ul className='list-items'>
            {itemsStore
               .filter(item => !category ? true : item.category === category)
               .map(item => <ItemStore key={item.id} item={item} />)}
         </ul>
      </div>
   )
}
