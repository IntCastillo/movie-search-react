import React, { Component } from "react";

import './SearchForm.css'

const API_KEY = "e4a7f8e9"

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
        <div className="SearchForm__inputContainer">
          <input
            className="SearchForm__input has-text-danger"
            onChange={this._handleUserSearch}
            type="text"
            placeholder="Hey, try 'Dragon Ball'"
          />
          <button className="SearchForm__submit has-text-danger"><i className="fas fa-search"></i></button>
        </div>
      </form>
    );
  }
}
