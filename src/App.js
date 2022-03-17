
import { useEffect, useState } from 'react';
import './App.css';
import Countries from './components/Countries/Countries';
import Country from './components/Country/Country';


function App() {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    fetch('https://restcountries.com/v2/all')
      .then(res => res.json())
      .then(data => setCountries(data))
  }, [])
  return (
    <div className="App">
      <Countries></Countries>
      <h2>Country number: {countries.length}</h2>
      <div className='countries-container'>
        {
          countries.map(country => <Country
            country={country}

          ></Country>)
        }

      </div>

    </div>
  );
}




export default App;
