import React from 'react'
import { Link } from 'react-router-dom'

export const BackToHome = () => (
  <Link
    className="button"
    to={`${process.env.PUBLIC_URL}/`}
    role="button"
  >
    Back to home
  </Link>
)
