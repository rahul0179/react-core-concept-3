import React from 'react';
import './Country.css'

const Country = (props) => {
    //console.log(props.country)
    // destructring 
    const { name, population, region, area, flags } = props.country
    return (
        <div className='dis'>
            <h1>Country: {name.common}</h1>
            <img src={flags.png} alt="" />
            <h1>Population : {population}</h1>
            <h1><small>Region: {region}</small></h1>
            <h1>Area :{area}</h1>



            {/*   Normal upay

            <h1>Name : {props.name}</h1>
            <h1>Population : {props.population}</h1>
            <h1><small>Region:  {props.region}</small></h1>
            <h1>Area : {props.country.area}</h1> */}
        </div>
    );
};

export default Country;