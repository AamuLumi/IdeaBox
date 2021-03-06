'use strict';

import React, {Component} from 'react';
import SearchResult from './SearchResult';

export default class SearchResultList extends Component {
  static propTypes = {
    results: React.PropTypes.array.isRequired
  }

  render() {
    return (
      <div className="v-searchResults">
        {this.props.results.map((result) => {
          return (
            <SearchResult result={result}
              key={'searchResult' + result.id}
              onClick={() => this.props.onResultClick(result)}/>
          );
        })}
      </div>
    );
  }
}
