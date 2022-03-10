import React from 'react'

const EducationJobs = (props) => {
    return (
        <div className="experience-item">
            <h3>{props.title}, <span>{props.location}</span></h3>
            <h4>{props.date}</h4>
            {(props.description !== "") && <p>{props.description}</p>}
        </div>
    )
}

export default EducationJobs