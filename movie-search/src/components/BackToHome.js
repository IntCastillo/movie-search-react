import React from 'react'
import { Link } from 'react-router-dom'

export const BackToHome = () => (
  <Link
    className="button"
    to="/"
    role="button"
  >
    Back to home
  </Link>
)
