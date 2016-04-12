import React, { Component } from 'react';

export default class SearchResultList extends Component {
  static propTypes = {
    results: React.PropTypes.array.isRequired
  }
  render() {
    return (
      <div className="v-searchResults">
        Coucou
      </div>
    );
  }
}
