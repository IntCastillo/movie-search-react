import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class Movie extends Component {

  static propTypes = {
    title: PropTypes.string,
    year: PropTypes.string,
    poster: PropTypes.string,
    type: PropTypes.string,
  }

  render() {

    const { title, year, poster, type } = this.props

    return (
      <div className='grid__item'>
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
                <p className="subtitle is-6">{year} ({type})</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
