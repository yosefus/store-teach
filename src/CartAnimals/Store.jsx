import React, { useContext } from 'react'
import { StoreContext } from '.'
import ItemStore from './ItemStore'
import { BsFillGrid3X3GapFill } from 'react-icons/bs'

export default function Store({ categories, setCategory, category, isGrid, setIsGrid }) {
   const { itemsStore } = useContext(StoreContext)

   const itemsToRender = itemsStore.filter(item => category === 'all' ? true : item.category === category)

   return (
      <div className="store">
         <ul className='categories'>
            {categories.map(c => <li className={category === c ? 'active' : ''} onClick={() => setCategory(c)} key={c}>{c}</li>)}
            <li onClick={() => setIsGrid(old => !old)}><BsFillGrid3X3GapFill /></li>
         </ul>
         {isGrid ?
            <ul className='list-items'>
               {itemsToRender.map(item => <ItemStore key={item.id} item={item} />)}
            </ul> :
            <div className='list-items'>
               <table>
                  <thead>
                     <tr>
                        <th>image</th>
                        <th>name</th>
                        <th>price</th>
                        <th>in stock</th>
                     </tr>
                  </thead>
                  <tbody>
                     {itemsToRender.map(it => (<tr>
                        <td>{it.icon}</td>
                        <td>{it.name}</td>
                        <td>{it.price}</td>
                        <td>{it.inStock}</td>
                     </tr>))}
                  </tbody>
               </table>
            </div>
         }

      </div>
   )
}
