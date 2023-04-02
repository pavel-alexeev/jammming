import React from "react";
import "./SearchResults.css";

import TrackList from "../TrackList/TrackList";

class SearchResults extends React.Component {
  render() {
    return (
      <div className="SearchResults">
        <h2>Results</h2>
<<<<<<< HEAD
        <TrackList
          tracks={this.props.searchResults}
          onAdd={this.props.onAdd}
          isRemoval={false}
        />
=======
        <TrackList tracks={this.props.SearchResults} />
>>>>>>> 66c8fb393cfe504dce17cd3bca447bfd3972aa88
      </div>
    );
  }
}

export default SearchResults;
