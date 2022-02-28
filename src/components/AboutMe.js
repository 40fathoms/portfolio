import React from 'react'

const AboutMe = () => {
    return (
        <section className="aboutMe">

            <p className="aboutMe-about">
                I'm a physicist who loves building things with code.
                <br />
                <br />
                My first contact with programming was in 2015. At the time I
                started to grasp basic concepts of programming whilst trying
                to create mods for the game Skyrim. Albeit being at a basic level,
                this hobby sparked my interest in coding and motivated
                me to learn more about it in the future.
                <br />
                <br />
                In 2016 I had programming lectures at the university,
                allowing me to study and learn about C++, algorithms, data structures
                and how to get familiar with terminals. Concurrently, I started to
                learn Fortran, which was needed for my undergraduate research.
                <br />
                <br />
                My undergraduate research and the research I worked on during my
                master's focused mainly on computational chemistry and physics. In spite
                of that, I wasn't happy in the academic career. As I evaluated which career
                path should be taken, and in the face of my acquaintance with programming, I
                decided to shift my focus into web development.
                <br />
                <br />
                In 2021 I started to learn Python, aiming to become a Back-End
                developer. In order to enhance my comprehension in the subject, I also
                dedicated to learning the basics of Front-End development. In the face of
                this, I started to really enjoy Front-End, and realized that this was what
                I wanted to do for my career. Such assumption became consolidated after
                a few months of self-teaching.
            </p>

            <button
                className="button"
                data-text="Resume"
            >
                Resume
            </button>

        </section>
    )
}

export default AboutMe