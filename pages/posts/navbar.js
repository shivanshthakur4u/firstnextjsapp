import React from 'react'
import Styles from '../../styles/Navbar.module.css'
const navbar = () => {
  return (
    <>
        <nav className={Styles.container}>
            <ul>
                <li><a href='#'>Home</a></li>
                <li><a href='#'>About</a></li>
                <li><a href='#'>Posts</a></li>
                <li><a href='#'>Contact Us</a></li>
            </ul>
        </nav>
    </>
  )
}

export default navbar