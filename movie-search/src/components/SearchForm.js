import React, { Component } from "react";

// OMDB API: http://www.omdbapi.com/?i=tt3896198&apikey=e4a7f8e9
const API_KEY = "e4a7f8e9";

export class SearchForm extends Component {
  state = {
    searchText: ""
  };

  _handleUserSearch = e => {
    this.setState({ searchText: e.target.value });
  };

  _handleSubmit = e => {
    e.preventDefault();
    const { searchText } = this.state;
    fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${searchText}`)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        const { Search = [], totalResults = "0" } = data;
        console.log({ Search, totalResults });
        this.props.onResults(Search);
      });
  };

  render() {
    return (
      <form onSubmit={this._handleSubmit}>
        <div className="field is-grouped">
          <p className="control is-expanded">
            <input
              className="input"
              onChange={this._handleUserSearch}
              type="text"
              placeholder="Try something like 'Dragon Ball'"
            />
          </p>
          <p className="control">
            <button className="button is-info">Search</button>
          </p>
        </div>
      </form>
    );
  }
}
