import React from 'react'
import homeImage from '../../images/homeimage.jpeg'

function Home(props) {
    return (
        <div style={{textAlign: "center"}}>
            <img src={homeImage} alt="" style={{width: 500}}/>  
            <br />
            <br />
            <div>
                If you want to search the covid-19 data, please, log in.
            </div>
        </div>
    )
}

export default Home;
