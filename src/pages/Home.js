import React from 'react'

import Welcome from '../components/Welcome'
import Briefing from '../components/Briefing'
import AboutMe from '../components/AboutMe'

const Home = () => {
  
  window.scroll(0,0)

  return (
    <> 
      <Welcome />
      <Briefing />
      <AboutMe />
    </>
  )
}

export default Home