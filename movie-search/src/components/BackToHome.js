import React from 'react'
import { Link } from 'react-router-dom'

export const BackToHome = () => (
  <Link
    className="button"
    to={`${process.env.PUBLIC_URL}/`}
    role="button"
  >
    <i className="fas fa-chevron-left" style={{marginRight: 6}}></i> Back to Search
  </Link>
)
