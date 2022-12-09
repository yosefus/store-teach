import React from 'react'

export default function CountryCard({ country }) {

   const { name, flag } = country

   return (
      <li className={'countryCard'}>
         <p className={'name'}>{name.length > 20 ? `${name.substring(0, 20)}...` : name}</p>
         <span>
            <img src={flag} alt="flag" />
         </span>
      </li>
   )
}
