import React, { useState } from 'react'
import axios from 'axios'
import world from '../../images/world.jpeg'

function Search() {
    const [data, setData] = useState([])
    const [country, setCountry] = useState("")
    const [isError, setIsError] = useState(false)

    render() {
        return (
            <div style={{ marginTop: 50, textAlign: "center" }}>
                <img src={world} style={{ width: 500 }} />
                <br />
                <div className="lead" style={{ fontSize: 16 }}>
                    <label htmlFor="items" style={{ marginRight: 10 }}>Choose a country: </label>
                    <select id="items" onChange={this.handleOnChange} >
                        <option value="" selected disabled hidden>Choose here</option>
                        {this.state.countryArray.map(country =>
                            <option key={country.country} value={country.country}>
                                {country.country}
                            </option>)}
                    </select>
                    <button
                        className="btn btn-warning btn-sm"
                        style={{ margin: "25px 25px" }}
                        onClick={this.handleOnClick}
                    >
                        Search
                </button>
                    {this.state.countryData !== null ? (
                        <div className="lead" style={{ fontSize: 16 }}>
                            {console.log(this.state.countryData)}
                        Population: {this.state.countryData.data.All.population}
                            <br />
                        Confirmed:{this.state.countryData.data.All.confirmed}
                            <br />
                        Death:{this.state.countryData.data.All.deaths}
                            <br />
                        Recovered: {this.state.countryData.data.All.recovered}
                        </div>
                    ) : ""}
                </div>
            </div>
        )
    }
}

export default Search 