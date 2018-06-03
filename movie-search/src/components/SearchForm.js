import React, { Component } from 'react'

export class SearchForm extends Component {

  state = {
    searchText: ''
  }

  _handleUserSearch = (e) => {
    this.setState({ searchText: e.target.value })
  }

  render() {
    console.log(this.state.searchText);
    return (
      <form className="field is-grouped">
        <p className="control is-expanded">
          <input
            className="input"
            onChange={this._handleUserSearch}
            type="text"
            placeholder="Movies to search..."
          />
        </p>
        <p className="control">
          <button
            className="button is-warning"
            type='submit'
            >
            Search
          </button>
        </p>
      </form>
    )
  }
}
