import React, { Component } from "react";
import { Link } from 'react-router-dom'
import PropTypes from "prop-types";

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
      <Link to={`${process.env.PUBLIC_URL}/detail/${id}`} className="grid__item">
        <div className="card card__results">
          <div className="card-image">
            <figure className="image">
              <img src={poster} alt={title} />
            </figure>
          </div>
          <div className="card-content">
            <div className="media">
              <div className="media-content">
                <p className="title is-4">{title}</p>
                <p className="subtitle is-6">
                  {year} ({type})
                </p>
              </div>
            </div>
          </div>
        </div>
      </Link>
    )
  }
}
