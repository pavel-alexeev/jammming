import React from "react";
import "./Playlist.css";

<<<<<<< HEAD
// import App from "../App";
import TrackList from "../TrackList/TrackList";

class Playlist extends React.Component {
  constructor(props) {
    super(props);
    this.handleNameChange = this.handleNameChange.bind(this);
  }
  handleNameChange(event) {
    this.props.onNameChange(event.target.value);
  }

  render() {
    return (
      <div className="Playlist">
        <input defaultValue={"New Playlist"} onChange={this.handleNameChange} />
        <TrackList
          tracks={this.props.playlistTracks}
          onRemove={this.props.onRemove}
          isRemoval={true}
        />
        <button className="Playlist-save" onClick={this.props.onSave}>
          SAVE TO SPOTIFY
        </button>
=======
class Playlist extends React.Component {
  render() {
    return (
      <div className="Playlist">
        <input defaultValue={"New Playlist"} />
        {/* <TrackList /> */}
        <button className="Playlist-save">SAVE TO SPOTIFY</button>
>>>>>>> 66c8fb393cfe504dce17cd3bca447bfd3972aa88
      </div>
    );
  }
}

export default Playlist;
