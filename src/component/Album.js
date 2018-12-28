import React from "react";
import "../css/album.css";
import { observer } from "mobx-react";
import LastFm from "./LastFm";

class Album extends React.Component {
  render() {
    const { album, onClick } = this.props;
    return (
      <div className="album" onClick={() => onClick(album)}>
        <div className="cover">
          <img
            src={"https://www.spirit-of-metal.com" + album.cover}
            alt="cover"
          />
        </div>
        <div className="info">
          <div className="author">{album.author}</div>
          <div className="title">{album.title}</div>
          <div className="genre">{album.genre}</div>
        </div>
        <LastFm album={album} />
      </div>
    );
  }
}
export default observer(Album);
