import React from 'react'
// import Link from 'gatsby-link'
import logo from '../assets/logo.png'
// import styles from './HeroHeader.css'
// console.log(styles);

const HeroHeader = ({ siteTitle }) => (
  <div
    style={{
      background: '#1e1e1e',
      marginBottom: '1.45rem',
      height: '600px',
      textAlign: 'center',
      color: 'white'
    }}
  >
    <img src={logo} alt="logo"
      style={{
        filter: 'invert(1)',
        marginTop: '125px',
      }}
    />
    <h1>October 6-7 2018</h1>
    <h2>Read our Rules</h2>

  <button>Get Tickets!</button>
  </div>
)

export default HeroHeader