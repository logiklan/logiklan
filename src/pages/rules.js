import React from 'react'
import Link from 'gatsby-link'
import Nav from '../components/Nav'

const Rules = () => (
  <div>
    <Nav />
    <h1>Hi from the second page</h1>
    <p>Welcome to page 2</p>
    <Link to="/">Go back to the homepage</Link>
  </div>
)

export default Rules