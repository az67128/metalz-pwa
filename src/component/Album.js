import React from "react";
import "../css/album.css";
import { observer } from "mobx-react";
import LastFm from "./LastFm";

class Album extends React.Component {
  render() {
    const { album } = this.props;
    return (
      <div className="album">
        <div className="cover">
          <a
            href={`
            https://play.google.com/store/search?q=${album.author}+${
              album.title
            }&c=music`}
            target="_blank"
          >
            <img
              src={"https://www.spirit-of-metal.com" + album.cover}
              alt="cover"
            />
          </a>
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
