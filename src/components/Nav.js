import React from 'react'
import Link from 'gatsby-link'
import styles from './Nav.css'

const Nav = () => (
  <ul className={styles.nav}>
    <li><Link to="/">Home</Link></li>
    <li><Link to="/rules">The Rules</Link></li>
    <li><Link to="/images">Image Gallery</Link></li>
  </ul>
)

export default Nav