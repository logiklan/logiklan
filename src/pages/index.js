import React from 'react'
import Link from 'gatsby-link'
import Layout from '../components/layout'
import Nav from '../components/Nav'

const IndexPage = () => (
  <div>
    <Nav />
    <Layout />
    <section 
       style={{
         margin: '0 auto',
         maxWidth: 960,
         padding: '0px 1.0875rem 1.45rem',
         paddingTop: 0,
        }}
        >
        <h1>Hello!</h1>
    <p>Welcome to LogikLAN.</p>
    <p>Game on.</p>
    <Link to="/page-2/">Go to page 2</Link>
    </section>
  </div>
)

export default IndexPage
