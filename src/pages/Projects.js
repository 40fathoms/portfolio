import React from 'react'
import { useNavigate } from 'react-router-dom'
import { nanoid } from 'nanoid'
import { BsArrowLeft } from 'react-icons/bs'

import Project from '../components/Project'

import projectsData from '../projectsData'

const Projects = () => {

  const navigate = useNavigate()
  window.scroll(0, 0)

  // renders the projects elements
  let projects = projectsData.map(project => {
    return (
      <Project
        title={project.title}
        background={project.background}
        liveSite={project.liveSite}
        repository={project.repository}
        tools={project.tools}
        description={project.description}
        key={nanoid()}
      />
    )
  })

  return (
    <section className='projects'>

      <button
        className='return-button'
        onClick={() => navigate(`/`)}
      > <BsArrowLeft /> </button>

      <div className="projects-container">
        {projects}
      </div>

      <a href="https://github.com/40fathoms?tab=repositories" className="button" target="_blank">See More</a>

    </section>
  )
}

export default Projects