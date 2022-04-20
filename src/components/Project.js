import React from 'react'
import { nanoid } from 'nanoid'

import { FaGithub, FaRegEye } from 'react-icons/fa'

const Project = (props) => {

    
    return (
        <div className="projects-item">

            <div className="projects-image">

                {/* project background image */}
                <img src={require(`../images/${props.background}`)} alt="Project" />
                
                {/* hover background effect */}
                <div className="projects-image-cover"></div>

                {/* hover link buttons */}
                <div className="projects-image-buttons">

                    <a href={props.liveSite} target="_blank">
                        <FaRegEye /> Live Site
                    </a>
                    <a href={props.repository} target="_blank">
                        <FaGithub /> Repository
                    </a>

                </div>

            </div>

            <div className="projects-content">

                <div className="projects-buttons-mobile">
                    <a href={props.liveSite} target="_blank" className="projects-button">
                        <FaRegEye /> Live Site
                    </a>
                    <a href={props.repository} target="_blank" className="projects-button">
                        <FaGithub /> Repository
                    </a>
                </div>

                <h2 className="projects-title">{props.title}</h2>

                <p className="projects-tools">
                    {
                        props.tools.map(tool => {
                            return(
                                <span key={nanoid()}>{tool}</span>
                            )
                        })
                    }
                </p>

                <p className="projects-description">{props.description}</p>

            </div>

        </div>
    )
}

export default Project