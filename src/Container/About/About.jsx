import React from 'react'
import "./About.css"
import Register from '../Register/Register'

import scope from "../../data/stethoscope.png"

const About = () => {
  return (
    <div className='about'>
        <div className='left-side'>
            <h2 className='title'>Health Record System</h2>
            <p>
            MedDoc is a secure blockchain based platform for storage of highly sensitive and critical data related to patients that is shared among multiple facilities and agencies for effective diagnosis and treatment.
            </p>

            <button className='signup'>
            <a href="/signup" className="register" onClick={() => <Register/>}>
            Sign Up Now!
            </a> 
            </button>

        </div>
        <div className='right-side'>
            <img src={scope} alt=''></img>
        </div>
    </div>
  )
}

export default About