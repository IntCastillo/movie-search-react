import React, { Component } from 'react';
import { Title } from './components/Title'
import { SearchForm } from './components/SearchForm'
import { MoviesList } from './components/MoviesList'

import 'bulma/css/bulma.css';
import './App.css';

class App extends Component {

  state = { movieResults: [], userSearch: false}

  _handleResults = results => {
    this.setState({ movieResults: results, userSearch: true })
  }

  _renderResults() {
    return this.state.movieResults.length === 0
    ? <h6 className="is-size-6" className='form__text'> 😞 Sorry, try something different...</h6>
    : <MoviesList movieResults={this.state.movieResults} />
  }

  render() {
    return (
      <div className='App'>
        <section className="hero is-bold">
          <div className="hero-body">
            <div className="container container__lg">
              <Title>Movie Searcher</Title>
              <SearchForm onResults={this._handleResults}/>
            </div>
            <div className="container">
              {
                this.state.userSearch
                ? this._renderResults()
                : <h4 className='is-size-6' className='form__text'> You can search Movies, Series or Videogames </h4>
              }
            </div>
          </div>
        </section>
      </div>
    )
  }
}

export default App;
