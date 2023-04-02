<<<<<<< HEAD
import React from "react";

import "./TrackList.css";
import Track from "../Track/Track";
// import SearchResults from "../SearchResults/SearchResults";

class TrackList extends React.Component {
  render() {
    return (
      <div className="TrackList">
        {this.props.tracks.map((track) => {
          return (
            <Track
              track={track}
              key={track.id}
              onAdd={this.props.onAdd}
              onRemove={this.props.onRemove}
              isRemoval={this.props.isRemoval}
            />
          );
        })}
      </div>
    );
  }
}

export default TrackList;
=======
import React from 'react';

import './TrackList.css';

class TrackList extends React.Component {
    render() {
        return (
            <div className="TrackList">
            <!-- You will add a map method that renders a set of Track components  -->
        </div> 
        )
    }
}

export default TrackList;
>>>>>>> 66c8fb393cfe504dce17cd3bca447bfd3972aa88
