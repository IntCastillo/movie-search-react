import React, { Component } from 'react'
import PropTypes from 'prop-types'

const API_KEY = "e4a7f8e9"

export class Detail extends Component {

  static propTypes = {
    match: PropTypes.shape({
      params: PropTypes.object,
      isExact: PropTypes.bool,
      path: PropTypes.string,
      url: PropTypes.string
    })
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
    console.log(this.props)
    const { movieId } = this.props.match.params
    this._fetchMovie({ id: movieId })
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
