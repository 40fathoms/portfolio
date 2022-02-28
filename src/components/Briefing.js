import React from 'react'

const Briefing = () => {
    return (
        <section className="briefing">
            <div className="briefing-intro">
                <h2>João Paulo Martins</h2>
                <h3>Web developer | Physicist</h3>

                <p>
                    I'm seeking a full-time web developer job where I can contribute
                    to the company's goals with my coding skills. I have experience
                    working with responsive websites using Git, Figma, HTML, CSS, SASS, 
                    ES6+ JavaScript and React.
                </p>
            </div>

            <div className="briefing-links">

                <button
                    className="button"
                    data-text="Projects"
                >
                    Projects
                </button>

                <button
                    className="button"
                    data-text="Education and Experience"
                >
                    Education and Experience
                </button>
            </div>
        </section>
    )
}

export default Briefing