import React from 'react'
import Link from 'gatsby-link'
import logo from '../assets/logo.png'

const HeroHeader = ({ siteTitle }) => (
  <div
    style={{
      background: '#1e1e1e',
      marginBottom: '1.45rem',
      height: '600px',
      textAlign: 'center'
    }}
  >
  <h1>Hello!</h1>
    <img src={logo} alt="logo"
      style={{
        filter: 'invert(1)',
        marginTop: '125px',
        opacity: '.9'
      }}
    />
  </div>
)

export default HeroHeader