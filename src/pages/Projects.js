import React from 'react'
import { useNavigate } from 'react-router-dom'
import { nanoid } from 'nanoid'
import { BsArrowLeft } from 'react-icons/bs'

import Project from '../components/Project'
import Loading from '../components/Loading'

import useHTTP from '../hooks/useHTTP'

const Projects = () => {

  const navigate = useNavigate()
  window.scroll(0, 0)


  // projects list management / data fetching
  const [projectList, setProjectList] = React.useState([])

  const { isLoading, sendRequest: fetchProjects } = useHTTP()

  React.useEffect(() => {

    const getProjects = projectsObj => {
      const loadedProjects = [];
      projectsObj.map(project => loadedProjects.push(project))
      setProjectList(loadedProjects);
    }

    fetchProjects(
      { url: 'https://portfolio-react-c9e0b-default-rtdb.firebaseio.com/projects.json' },
      getProjects
    );

  }, [fetchProjects]) 


  // renders the projects elements
  let projects = projectList.map(project => {
    return (
      <Project
        key={nanoid()}
        title={project.title}
        background={project.background}
        liveSite={project.liveSite}
        repository={project.repository}
        tools={project.tools}
        description={project.description}
      />
    )
  })


  // manages the page overflow depending on the loading state
  if (isLoading) {
    document.body.style.overflow = "hidden";
  }
  else {
    document.body.style.overflow = "auto";
  }

  return (
    <section className='projects'>

      <button
        className='return-button'
        onClick={() => navigate(`/`)}
      > <BsArrowLeft /> </button>

      {
        isLoading ?
          <Loading />
          :
          <div className="projects-container">
            {projects}
          </div>
      }

      <a href="https://github.com/40fathoms?tab=repositories" className="button" target="_blank">See More</a>

    </section>
  )
}

export default Projects