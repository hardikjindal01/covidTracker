import React from 'react'
import './countrypicker.css';
import { NativeSelect, FormControl } from '@material-ui/core';



const CountryPicker = ({fetchcountries , country , countrychange}) => {


    return (
        <FormControl className="formcontrol">
            <NativeSelect value={country} onChange={countrychange}>
                <option value="">Global</option>
                {fetchcountries.map((Country, i) => <option key={i} value={Country.country}>{Country.country}</option>)}
            </NativeSelect>
        </FormControl>
    )
}

export default CountryPicker
