import React from 'react'
import Link from 'gatsby-link'
import logo from '../assets/logo.png';

const Header = ({ siteTitle }) => (
  <div
    style={{
      background: 'rebeccapurple',
      marginBottom: '1.45rem',
    }}
  >
    <div
      style={{
        margin: '0 auto',
        display: 'flex',
        maxWidth: 960,
        padding: '1.45rem 1.0875rem',
      }}
    >
      <Link
        to="/"
        style={{
          color: 'white',
          textDecoration: 'none',
        }}
      >
      <h1 style={{ margin: 0 }}>
          {siteTitle}
      </h1>
      <img src={logo} alt="logo"/>
      </Link>
    </div>
  </div>
)

export default Header
