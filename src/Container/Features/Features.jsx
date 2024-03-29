import React from 'react'
import user from "../../data/user.svg"
import tick from "../../data/tick.svg"
import down from "../../data/down.svg"
import store from "../../data/store.png"
import doc from "../../data/doc.svg"
import disease from "../../data/disease.png"
import "./Features.css"

const Features = () => {
    return (
        <div>

            <section className="services section container" id="about">
                <h2 className="section__title">Getting started is quick and easy</h2>
                <div className="services__container grid">
                    <div className="services__data">
                        <h3 className="services__subtitle">Register Yourself</h3>
                        <img className="services__img" src={user} />
                        <p className="services__description">
                            Register yourself to the locker, secured by blockchain
                            technology.
                        </p>
                    </div>

                    <div className="services__data">
                        <h3 className="services__subtitle">Authenticate Yourself</h3>
                        <img className="services__img" src={tick} />
                        <p className="services__description">
                            Log In with your credentials.
                        </p>
                    </div>

                    <div className="services__data">
                        <h3 className="services__subtitle">Upload your Data</h3>
                        <img className="services__img" src={down} />
                        <p className="services__description">
                            Create, update, or view your health record information.
                        </p>
                    </div>
                </div>
            </section>
            <section className="services section container" id="services">
                <h2 className="section__title">Services we deliver</h2>
                <div className="services__container grid">
                    <div className="services__data">
                        <h3 className="services__subtitle">Maintaining Medical Records</h3>
                        <img className="services__img" src={store} />
                        <p className="services__description">
                            Keep track of your medical records, enabled by blockchain
                            technology.
                        </p>
                    </div>

                    <div className="services__data">
                        <h3 className="services__subtitle">Connect With Doctors</h3>
                        <img className="services_img" src={doc} />
                        <p className="services__description">
                            Share your records with our trusted medical experts, to get a prescription.
                        </p>
                    </div>
                    
                </div>
            </section>

        </div>
    )
}

export default Features