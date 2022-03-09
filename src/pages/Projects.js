import React from 'react'
import { useNavigate } from 'react-router-dom'
import { nanoid } from 'nanoid'
import { BsArrowLeft } from 'react-icons/bs'

const Projects = () => {

  const navigate = useNavigate()
  window.scroll(0, 0)

  return (
    <div>
      <button 
        className='return-button'
        onClick={()=>navigate(`/`)}
      > <BsArrowLeft /> </button>
    </div>
  )
}

export default Projects