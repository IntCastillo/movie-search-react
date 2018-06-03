import React, { Component } from 'react';
import { Title } from './components/Title'
import { SearchForm } from './components/SearchForm'
import { MoviesList } from './components/MoviesList'

import 'bulma/css/bulma.css';
import './App.css';

class App extends Component {

  state = { movieResults: [] }

  _handleResults = results => {
    this.setState({ movieResults: results })
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
                this.state.movieResults.length < 1
                ? <h4 className='is-size-6' style={{marginTop: 10, marginBottom: 10, width: '100%', textAlign: 'center'}}>
                  You can search Movies, Series or Videogames
                </h4>
                : <MoviesList movieResults={this.state.movieResults} />
              }
            </div>
          </div>
        </section>
      </div>
    )
  }
}

export default App;
