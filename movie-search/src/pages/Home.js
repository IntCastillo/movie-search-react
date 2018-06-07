import React, { Component } from 'react'
// import { Title } from "../components/Title"
import { SearchForm } from "../components/SearchForm"
import { MoviesList } from "../components/MoviesList"

import './Home.css'
// import './Results.css'

export class Home extends Component {

  state = { movieResults: [], userSearch: false }

  _handleResults = results => {
    this.setState({ movieResults: results, userSearch: true })
  }

  _renderResults() {
    console.log('movieResults', this.state.movieResults);
    return this.state.movieResults.length === 0
    ? <h6><span role="img" aria-label="sad face"> 😞 </span>  Sorry, try something different...</h6>
    : <MoviesList movieResults={this.state.movieResults} />
  }

  componentWillMount() {
    if ( window.sessionStorage.getItem('sessionMovies') !== null ) {
      const movieResults = JSON.parse(window.sessionStorage.getItem('sessionMovies'))
      this.setState({ movieResults, userSearch: true })
      this._renderResults()
    } else {
      window.sessionStorage.setItem('sessionMovies', [])
    }

  }

  render() {
    return (
      <section className="Home">
        <div className="Home__container">
          <div className="Home__form">
            {/* <Title>Entertainment Searcher</Title> */}
            <SearchForm onResults={this._handleResults}/>
          </div>
          <div className="Home__description">
            {
              this.state.userSearch
              ? this._renderResults()
              : <h6> You can search Movies, Series or Videogames </h6>
            }
          </div>
          <div className="Home__credits">
            <p>I use <a href="https://www.omdbapi.com/" target="_blank" rel="noopener noreferrer">OMDB API</a> for results</p>
            <p><i>
              Follow me on <a href="https://twitter.com/lucasromerodb" target="_blank" rel="noopener noreferrer">Twitter</a> or check my <a href="https://github.com/lucasromerodb" target="_blank" rel="noopener noreferrer">Github</a>
            </i></p>
            <small><a href="https://www.udemy.com/aprendiendo-react/?couponCode=5_ANNIVERSARIO" target="_blank" rel="noopener noreferrer">Do you want to learn React? (Spanish)</a></small>
          </div>
        </div>
      </section>
    )
  }
}
