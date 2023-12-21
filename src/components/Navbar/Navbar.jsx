import { useState } from 'react'
import { MdMenu, MdClose } from "react-icons/md";
import { projects, skills, contact, intro } from '../../Portfolio_details'
import './Navbar.css'

const Navbar = () => {
    const [showNavList, setShowNavList] = useState(false)

    const toggleNavList = () => setShowNavList(!showNavList)

    return (
        <nav className='center nav'>
            <ul
                style={{ display: showNavList ? 'flex' : null }}
                className='nav__list'
            >
                {intro.length ? (
                    <li className='nav__list-item'>
                        <a
                            href='#about'
                            onClick={toggleNavList}
                            className='link link--nav'
                        >
                            About
                        </a>
                    </li>
                ) : null}
                {projects.length ? (
                    <li className='nav__list-item'>
                        <a
                            href='#projects'
                            onClick={toggleNavList}
                            className='link link--nav'
                        >
                            Projects
                        </a>
                    </li>
                ) : null}

                {skills.length ? (
                    <li className='nav__list-item'>
                        <a
                            href='#skills'
                            onClick={toggleNavList}
                            className='link link--nav'
                        >
                            Skills
                        </a>
                    </li>
                ) : null}

                {contact.email ? (
                    <li className='nav__list-item'>
                        <a
                            href='#contact'
                            onClick={toggleNavList}
                            className='link link--nav'
                        >
                            Contact
                        </a>
                    </li>
                ) : null}
            </ul>
            <button
                type='button'
                onClick={toggleNavList}
                className='btn btn--icon nav__hamburger'
                aria-label='toggle navigation'
            >
                {showNavList ? <MdClose size={24} color='#23283e' /> : <MdMenu size={24} color='#23283e' />}
            </button>
        </nav>
    )
}

export default Navbar
