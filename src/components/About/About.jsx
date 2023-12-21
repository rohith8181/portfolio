import { FaGithub, FaLinkedin } from "react-icons/fa";
import { useTypewriter, Cursor } from "react-simple-typewriter"
import { about } from '../../Portfolio_details'
import './About.css'

const About = () => {
    const { name, description, resume, social } = about
    const [text] = useTypewriter({
        words: ['Web Developer', 'React.js Developer', 'Programmer'],
        loop: {},
        typeSpeed: 200,
        delaySpeed: 10,
    });
    return (
        <div id="top" className='about center'>
            {name && (
                <div className="heading hero-text">
                    <h1>
                        &lt;
                        Rohith
                        <span>Perala/&gt;</span>
                    </h1>
                </div>
            )}

            <h2 className='about__role'>A {text}<Cursor /></h2>
            <p className='about__desc'>{description && description}</p>

            <div className='about__contact center'>
                {resume && (
                    <a href={resume} target="blank">
                        <span type='button' className='btn btn--outline'>
                            Resume
                        </span>
                    </a>
                )}

                {social && (
                    <>
                        {social.github && (
                            <a
                                target="blank"
                                href={social.github}
                                aria-label='github'
                                className='link link--icon'
                            >
                                <FaGithub size={28} />
                            </a>
                        )}

                        {social.linkedin && (
                            <a
                                href={social.linkedin}
                                target="blank"
                                aria-label='linkedin'
                                className='link link--icon'
                            >
                                <FaLinkedin size={28} />
                            </a>
                        )}
                    </>
                )}
            </div>
        </div>
    )
}

export default About
