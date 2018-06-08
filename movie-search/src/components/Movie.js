import React, { Component } from "react";
import { Link } from 'react-router-dom'
import PropTypes from "prop-types";

import '../pages/Home.css'

export class Movie extends Component {
  static propTypes = {
    id: PropTypes.string,
    title: PropTypes.string,
    year: PropTypes.string,
    poster: PropTypes.string,
    type: PropTypes.string
  };

  render() {
    const { id, title, year, poster, type } = this.props;

    return (
      <Link to={`${process.env.PUBLIC_URL}/detail/${id}`} className="Home__movie">
        <img src={poster} alt={title} className="Home__movieImg" />
        <img src={poster} alt={title} className="Home__movieImg Home__movieImg_blured" />
        <div className="Home__movieContent">
          <h3 className="Home__movieContent-title">{title}</h3>
          <p className="Home__movieContent-year">{year} ({type})</p>
        </div>
      </Link>
    )
  }
}
