import React from 'react';
import "./Country.css"

const Country = (props) => {
    const { name, flag, capital, region, population } = props.country;
    console.log(props.country)
    return (
        <div className='country'>
            <h3>Name: {name} </h3>
            <img src={flag} alt="" />
            <h4> capital: {capital} </h4>
            <h4>Region: {region}</h4>
            <p>Population: {population}</p>
        </div>
    );
};

export default Country;