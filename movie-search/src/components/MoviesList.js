import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Movie } from './Movie'

export class MoviesList extends Component {

  static propTypes = {
    movies: PropTypes.array
  }

  render() {
    const { movieResults } = this.props
    return (
      <div className='grid'>
        {
          movieResults.map(movie => {
            return (
              <Movie
                key={movie.imbdID}
                poster={movie.Poster}
                title={movie.Title}
                year={movie.Year}
                type={movie.Type}
              />
            )
          })
        }
      </div>
    )
  }
}
