import { useEffect, useState } from 'react'
import { BrowserRouter, NavLink, Route, Routes, useLocation, useParams, useSearchParams } from 'react-router-dom'
import Countries from '../Countries'
import CountryCard from '../Countries/CountryCard'

export default function Router() {

   const linkEurope = {
      pathname: '/countries/regien/europe',
      search: "?sort=cca3",
   }

   function getClass({ isActive }) {
      return isActive ? 'active' : ''
   }

   return (
      <div>
         <BrowserRouter>
            <header className='navbar'>
               <NavLink end className={getClass} to='/' >main</NavLink>
               <NavLink end className={getClass} to='/users' >users</NavLink>
               <NavLink end className={getClass} to='/countries' >countries</NavLink>
               <NavLink end to={linkEurope} className={getClass} state={{ from: true }}>europe</NavLink>
            </header>
            <Routes>
               <Route element={<>main</>} index />
               <Route element={<>users</>} path="/users" />
               <Route path="/countries" >
                  <Route element={<Countries />} index />
                  <Route element={<Country />} path=":countryId" />
                  <Route element={<Regien />} path="regien/:regienName" />
               </Route>
               <Route element={<>404 page</>} path="*" />
            </Routes>
         </BrowserRouter>
      </div>
   )
}

function Country() {
   const { countryId } = useParams()
   const [currCountry, setCurrCountry] = useState()

   useEffect(() => {
      fetch(`https://restcountries.com/v3.1/alpha/${countryId}`)
         .then(res => res.json())
         .then(setCurrCountry)
         .catch(console.log)
   }, [countryId])

   if (!currCountry)
      return <p>loading...</p>

   else {
      const { name: { common }, flags: { svg }, population, region } = currCountry[0]

      return <div>
         <div className="country-display">
            <p className={'name'}>{common}</p>
            <span>  <img src={svg} alt="flag" />  </span>
            <p><b>population :</b> {population}</p>
            <p><b>region :</b> {region}</p>
         </div>
      </div>
   }
}

function Regien() {
   const { regienName } = useParams()
   const [currCountries, setCurrCountries] = useState([])
   const { state } = useLocation();
   const [searchParams, setSearchParams] = useSearchParams();

   console.log(state);

   currCountries.sort((a, b) => a[searchParams.get('sort')] > b[searchParams.get('sort')] ? 1 : -1)


   useEffect(() => {
      fetch(`https://restcountries.com/v3.1/region/${regienName}`)
         .then(res => res.json())
         .then(setCurrCountries)
         .catch(console.log)
   }, [regienName])

   return (
      <div className='countryContainer'>
         <button onClick={() => setSearchParams({ sort: 'cca3' })}>sort by name</button>
         <button onClick={() => setSearchParams({ sort: 'population' })}>sort by poulation</button>
         <ul className='countries-list'>
            {currCountries?.map((country, i) => (
               <CountryCard key={`key${i}`} country={country} />
            ))}
         </ul>
      </div>
   )
}