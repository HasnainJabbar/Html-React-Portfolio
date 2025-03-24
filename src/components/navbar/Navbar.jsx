import React from 'react'
import { Link } from 'react-router'
import { navbar } from '../Constants/SidebarConstants'
const Navbar = () => {

    return (
        <>
            <nav className="navbar">
                <ul className="navbar-list">
                    {
                        navbar.map((item, index) => {
                            return (
                                <li key={index} className="navbar-item">
                                    <Link to={`/${item}`} className="navbar-link">{item}</Link>
                                </li>
                            )
                        })
                    }
                </ul>
            </nav>
        </>
    )
}

export default Navbar
