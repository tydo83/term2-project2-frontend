import React, { useState, useEffect } from 'react'
import axios from 'axios'
import world from '../../images/world.jpeg'

function Search() {
    const [data, setData] = useState([])
    const [country, setCountry] = useState("")
    const [isError, setIsError] = useState(false)
    const [errorMessage, setErrorMessage] = useState("")
    const [countryArray, setCountryArray] = useState([])
    const [countryData, setCountryData] = useState(null)

    useEffect(async () => {
        try {
            let countryPayload = await axios.get("https://covid-api.mmediagroup.fr/v1/cases")
            let newCountryArray = []
            for (let key in countryPayload.data) {
                newCountryArray.push({
                    country: key,
                    data: countryPayload.data[key]
                })
            }
            setCountryArray(newCountryArray)
        } catch (e) {
            console.log(e);
        }
    }, [])

    function handleOnClick() {
        try {
            let foundCountry = countryArray.find(item => item.country === country)
            setCountryData(foundCountry)
        } catch (e) {
            console.log(e)
        }
    }

    return (
        <div style={{ marginTop: 50, textAlign: "center" }}>
            <img src={world} style={{ width: 500 }} />
            <br />
            <div className="lead" style={{ fontSize: 16 }}>
                <label htmlFor="items" style={{ marginRight: 10 }}>Choose a country: </label>
                <select id="items" onChange={(e) => setCountry(e.target.value)} >
                    <option value="" selected disabled hidden>Choose here</option>
                    {countryArray.map(country =>
                        <option key={country.country} value={country.country}>
                            {country.country}
                        </option>)}
                </select>
                <button
                    className="btn btn-warning btn-sm"
                    style={{ margin: "25px 25px" }}
                    onClick={handleOnClick}
                >
                    Search
                </button>
                {countryData !== null ? (
                    <div className="lead" style={{ fontSize: 16 }}>
                        Population: {countryData.data.All.population}
                        <br />
                        Confirmed:{countryData.data.All.confirmed}
                        <br />
                        Death:{countryData.data.All.deaths}
                        <br />
                        Recovered: {countryData.data.All.recovered}
                    </div>
                ) : ""}
            </div>
        </div>
    )
}

export default Search