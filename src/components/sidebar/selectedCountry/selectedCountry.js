import React from 'react';
import './selectedCountry.css';


const SelectedCountry = (props) => {

    const added = props.added;
    
    return (
        <div className="row selected-country">
            <div className="col">
                <p>Name: <b>{added.name.common}</b></p>
            </div>
            <div className="col">
                <p>Capital: <b>{added.capital}</b></p>
            </div>
        </div>
    );
};

export default SelectedCountry;