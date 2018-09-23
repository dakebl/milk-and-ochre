import React from 'react'
import Helmet from 'react-helmet'
import { Link } from 'gatsby'

import Navbar from '../components/Navbar'
import './all.sass'

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet title="MILK+OCHRE" />
    <Navbar />
    <div>{children}</div>
    <div>
      <a href="https://milk-and-ochre.netlify.com/admin">Admin</a>
    </div>
  </div>
)

export default TemplateWrapper
