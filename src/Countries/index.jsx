import React, { useEffect, useState } from 'react'
import CountryCard from './CountryCard';

export default function Countries() {
   const [countryList, setCountryList] = useState([])

   async function getCountries() {
      try {
         const res = await fetch('https://restcountries.com/v3.1/all');
         const data = await res.json();
         setCountryList(data)
      } catch (error) { console.log(error) }
   }

   useEffect(() => {
      getCountries()
   }, [])

   return (
      <div className='countryContainer'>
         <ul className='countries-list'>
            {countryList.map((country, i) => (
               <CountryCard key={`key${i}`} country={country} />
            ))}
         </ul>
      </div>
   )
}
