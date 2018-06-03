import React, { Component } from 'react';
import { Title } from './components/Title'
import { SearchForm } from './components/SearchForm'

import 'bulma/css/bulma.css';
import './App.css';

class App extends Component {
  render() {
    return (
      <section className="hero is-danger is-bold">
        <div className="hero-body">
          <div className="container container__lg">
            <Title>Movie Searcher</Title>
            <SearchForm />
          </div>
        </div>
      </section>
    );
  }
}

export default App;
