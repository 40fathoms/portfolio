import React from 'react'

import Background from '../images/background.png'

const Welcome = () => { 
  return (
    <section className="welcome glitch">
        <div className="glitch-item" style={{backgroundImage: `url(${Background})`}}></div>
        <div className="glitch-item" style={{backgroundImage: `url(${Background})`}}></div>
        
        <h1 data-text="Design your universe.">Design your universe.</h1>
    </section>
  )
}

export default Welcome