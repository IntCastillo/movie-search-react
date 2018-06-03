import React, { Component } from 'react';
import { Title } from './components/Title'
import { SearchForm } from './components/SearchForm'

import 'bulma/css/bulma.css';
import './App.css';

class App extends Component {

  state = { movieResults: [] }

  _handleResults = results => {
    this.setState({ movieResults: results })
  }

  _renderResults = () => {
    const { movieResults } = this.state
    return movieResults.map(movie => {
      return <p>{movie.Title}</p>
    })
  }

  render() {
    return (
      <div>
        <section className="hero is-bold">
          <div className="hero-body">
            <div className="container container__lg">
              <Title>Movie Searcher</Title>
              <SearchForm onResults={this._handleResults}/>
              {
                this.state.movieResults.length < 1
                ? <h4 className='is-size-6' style={{marginTop: 10, marginBottom: 10}}>Without results.</h4>
                : this._renderResults()
              }
            </div>
          </div>
        </section>
        <div className='container container__lg has-text-centered'>
          <a href="https://bulma.io" className='middle-align'>
            <img src="https://bulma.io/images/made-with-bulma.png" alt="Made with Bulma" width="128" height="24"/>
          </a>
        </div>
      </div>
    )
  }
}

export default App;
