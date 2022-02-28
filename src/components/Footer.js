import React from 'react'

import {FaGithub, FaTwitter, FaLinkedin} from 'react-icons/fa'
import {HiMailOpen} from 'react-icons/hi'

const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer-links">
            <a href="https://github.com/40fathoms"> <FaGithub /> </a>
            <a href="https://twitter.com/40fathoms"> <FaTwitter /> </a>
            <a href="https://www.linkedin.com/in/jo%C3%A3o-paulo-m-013b211a0/"> <FaLinkedin /> </a>
            <a href="mailto:jpamdev@gmail.com"> <HiMailOpen /> </a>
        </div>
    </footer>
  )
}

export default Footer