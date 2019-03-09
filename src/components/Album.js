import React from "react";
import "./scss/Album.scss";
import CloseIcon from "./icons/CloseIcon";
import AlbumBottomPanel from "./AlbumBottomPanel";
import { observer } from "mobx-react";

class Album extends React.Component {
  render() {
    const {
      album_id,
      title,
      author,
      cover_url,
      genre,
      lastfm_url,
      listeners,
      playcount,
      google_link,
      yandex_link
    } = this.props.album;
    return (
      <div className="album">
        <div className="album__content">
          <div className="album__cover cover">
            <img
              src={`https://www.spirit-of-metal.com${cover_url}`}
              alt="cover"
              onClick={() =>
                this.props.togglePreview(
                  `https://www.spirit-of-metal.com${cover_url}`
                )
              }
            />
          </div>
          <div className="album__description">
            <div className="author">{author}</div>
            <div>
              <div className="title">{title}</div>
              <div className="genre">{genre}</div>
            </div>
          </div>
          <div
            className="album__delete"
            onClick={() => this.props.addToHateList(album_id)}
          >
            <button className="iconButton" type="button">
              <CloseIcon className="smallIcon" />
            </button>
          </div>
        </div>
        {lastfm_url && (
          <AlbumBottomPanel
            lastfm_url={lastfm_url}
            listeners={listeners}
            playcount={playcount}
            google_link={google_link}
            yandex_link={yandex_link}
          />
        )}
      </div>
    );
  }
}

export default observer(Album);
