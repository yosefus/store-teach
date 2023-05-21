import React from 'react'
import { Link } from 'react-router-dom'

export default function CountryCard({ country }) {

   const { name: { common }, flags: { svg }, cca3 } = country

   return (
      <Link to={`/countries/${cca3}`} >
         <li className={'countryCard'}>
            <p className={'name'}>{common.length > 20 ? `${common.substring(0, 20)}...` : common}</p>
            <span>
               <img src={svg} alt="flag" />
            </span>
         </li>
      </Link>
   )
}
