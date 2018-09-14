import React from 'react'
// import Link from 'gatsby-link'
import logo from '../assets/logo.png'
import styles from './HeroHeader.css'
console.log(styles)

const HeroHeader = ({ siteTitle }) => (
  <div className={styles.hero}>
    <img src={logo} alt="logo"/>
    <h1>October 6-7 2018</h1>
    <h2>Read our Rules</h2>

  <button>Get Tickets!</button>
  </div>
)

export default HeroHeader