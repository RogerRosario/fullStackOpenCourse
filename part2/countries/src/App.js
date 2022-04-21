import { useState, useEffect } from 'react'
import axios from 'axios'
import Filter from './components/Filter'
import Content from './components/Content'


function App() {

  const [country, setCountry] = useState([])
  const [allCountries, setAllCountries] = useState([])
  const [countryFilter, setCountryFilter] = useState("")

  useEffect(() => {

    axios
      .get(`https://restcountries.com/v3.1/all`)
      .then(response => {
        setAllCountries(response.data)
        console.log(response.data)
      })

  }, [])

  const handleSearchCountry = (e) => {

    setCountryFilter(e.target.value)
    if (countryFilter) {
      const regex = new RegExp(countryFilter, 'i');
      const filterCountry = () => allCountries.filter(country => country.name.toString().match(regex))
      setCountry(filterCountry)
    }

  }


  return (
    <div>
      <Filter value={countryFilter} setSearchCountry={handleSearchCountry} />

      <Content countries={country} setCountries={setCountry} />

    </div>
  )
}

export default App;
