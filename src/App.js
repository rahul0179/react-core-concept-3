import logo from './logo.svg';
import './App.css';
import { Component, useEffect, useState } from 'react';


function App() {
  return (
    <div className="App">

    </div>
  );

}























/* -----------------------------------------------------------------------------------
                          Unstructure data lode in Component
...................................................................................
function App() {
  return (
    <div className="App">
      <Countries></Countries>
    </div>
  );

}
function DisplayCountry(props) {
  return (
    <div>
      <h1>Country Name: {props.name}</h1>
      <h1>Population:{props.population}</h1>
    </div>
  )
}
function Countries() {
  const [countri, setCountries] = useState([])
  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
      .then(res => res.json())
      .then(data => setCountries(data))
  }, [])
  return (

    <div>
      <h1>Countries </h1>
      {
        countri.map(country => <DisplayCountry name={country.name.common} population={country.population
        }          ></DisplayCountry>)
      }
    </div>
  )
} */
export default App;
