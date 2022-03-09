import React from 'react'
import { useNavigate } from 'react-router-dom'
import { nanoid } from 'nanoid'
import { BsArrowLeft } from 'react-icons/bs'

import EducationJobs from '../components/EducationJobs'

import educationData from '../educationData'
import jobsData from '../jobsData'

const Experience = () => {

  const navigate = useNavigate()
  window.scroll(0, 0)

  // renders the certificates elements
  let education = educationData.map(certificate => {
    return (
      <EducationJobs
        title={certificate.title}
        location={certificate.location}
        date={certificate.date}
        description={certificate.description}
        key={nanoid()}
      />
    )
  })

  // renders the jobs elements
  let jobs = jobsData.map(job => {
    return (
      <EducationJobs
        title={job.title}
        location={job.location}
        date={job.date}
        description={job.description}
        key={nanoid()}
      />
    )
  })

  return (
    <section className="experience">

      <button 
        className='return-button'
        onClick={()=>navigate(`/`)}
      > <BsArrowLeft /> </button>

      <div className="experience-education">
        <h2>Education and Certificates</h2>
        {education}
      </div>

      <div className="experience-jobs">
        <h2>Professional Experience</h2>
        {jobs}
      </div>

    </section>
  )
}

export default Experience