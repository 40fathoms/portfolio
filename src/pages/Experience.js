import React from 'react'
import { useNavigate } from 'react-router-dom'
import { nanoid } from 'nanoid'
import { BsArrowLeft } from 'react-icons/bs'

import EducationJobs from '../components/EducationJobs'
import Loading from '../components/Loading'

import useHTTP from '../hooks/useHTTP'

const Experience = () => {

  const navigate = useNavigate()
  window.scroll(0, 0)


  // education/jobs list management / data fetching
  const [educationList, setEducationList] = React.useState([])
  const [jobList, setJobList] = React.useState([])

  const { isLoading, sendRequest: fetchExperience } = useHTTP()

  React.useEffect(() => {

    const getExperience = experienceObject => {
      const loadedCertificates = [];
      experienceObject.education.map(certificate => loadedCertificates.push(certificate))
      setEducationList(loadedCertificates);

      const loadedJobs = [];
      experienceObject.jobs.map(job => loadedJobs.push(job))
      setJobList(loadedJobs);
    }

    fetchExperience(
      { url: 'https://portfolio-react-c9e0b-default-rtdb.firebaseio.com/experience.json' },
      getExperience
    );

  }, [fetchExperience])


  // renders the certificates elements
  let education = educationList.map(certificate => {
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
  let jobs = jobList.map(job => {
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

  // manages the page overflow depending on the loading state
  if (isLoading) {
    document.body.style.overflow = "hidden";
  }
  else {
    document.body.style.overflow = "auto";
  }

  return (
    <section className="experience">

      <button
        className='return-button'
        onClick={() => navigate(`/`)}
      > <BsArrowLeft /> </button>

      {
        isLoading ?
          <Loading />
          :
          <>
            <div className="experience-education">
              <h2>Education and Certificates</h2>
              {education}
            </div>

            <div className="experience-jobs">
              <h2>Professional Experience</h2>
              {jobs}
            </div>
          </>
      }

    </section>
  )
}

export default Experience