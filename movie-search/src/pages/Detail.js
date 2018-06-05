import React, { Component } from 'react'
import PropTypes from 'prop-types'

const API_KEY = "e4a7f8e9"

export class Detail extends Component {

  static propTypes = {
    id: PropTypes.string
  }

  state = { movie: {} }

  _fetchMovie({ id }) {
    fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&i=${id}`)
      .then(response => response.json())
      .then(movie => {
        this.setState({ movie })
        console.log('Movie ->', this.state.movie);
      });
  }

  componentDidMount() {
    const { id } = this.props
    this._fetchMovie({ id })
  }

  render() {

    const { Title, Actors, Country, Genere, Released, Type, imdbRating, Poster } = this.state.movie

    return (
      <div>
        <h2>{Title}</h2>
        <p>{Released}</p>
        <p>{Country}</p>
        <p>{Genere}</p>
        <p>{Type}</p>
        <p>{imdbRating}</p>
        <img src={Poster} alt={Title}/>
        <p>{Actors}</p>
      </div>
    )
  }
}
