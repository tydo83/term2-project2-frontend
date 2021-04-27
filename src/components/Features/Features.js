import React, { Component } from 'react'
import '../../css/style.css'
import sickImage from '../../images/sick-man-flu-virus-cold-illness.jpeg'
import mask from '../../images/Wear-Mask-Properly_5_20.jpeg'

export default class Features extends Component {
    render() {
        return (
            <div>
                <hr className="featurette-divider" />
                <div className="row featurette" style={{ textAlign: "left", padding: "0 10% 0 10%" }}>
                    <div className="col-md-7">
                        <h2 className="featurette-heading">Watch for symptoms</h2>
                        <p className="lead" style={{fontSize: 17, width: "90%"}}>
                            People with COVID-19 have had a wide range of symptoms reported – ranging from mild symptoms to severe illness. Symptoms may appear 2-14 days after exposure to the virus. People with these symptoms may have COVID-19:
                            <br />
                            <br />
                            <ul>
                                <li>Fever or chills</li>
                                <li>Cough</li>
                                <li>Shortness of breath or difficulty breathing</li>
                                <li>Fatigue</li>
                                <li>Muscle or body aches</li>
                                <li>Headache</li>
                                <li>New loss of taste or smell</li>
                                <li>Sore throat</li>
                                <li>Congestion or runny nose</li>
                                <li>Nausea or vomiting</li>
                                <li>Diarrhea</li>
                            </ul></p>
                    </div>
                    <div className="col-md-5">
                        <img className="mx-auto d-block img-fluid" src={sickImage} />
                    </div>
                </div>
                <hr className="featurette-divider" />
                <div className="row featurette" style={{ textAlign: "left", padding: "0 10% 0 10%" }}>
                    <div className="col-md-7">
                        <h2 className="featurette-heading">Wear a mask. Save lives.</h2>
                        <p className="lead" style={{fontSize: 17, width: "90%"}}>
                            Wear a mask that fits well with no gaps
                            Stay at least 6 feet from others
                            Avoid crowds and poorly ventilated spaces
                            Get a vaccine when it's available to you
                        </p>
                    </div>
                    <div className="col-md-5">
                        <img className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" src={mask}/>

                    </div>
                </div>
                <hr className="featurette-divider" />
            </div>
        )
    }
}
