import React from "react";
import "../css/modal.css";
import { observer, inject } from "mobx-react";
import Loader from "./Loader";
import HeavyMetalIcon from "./icon/HeavyMetalIcon";
import PlayIcon from "./icon/PlayIcon";
import GooglePlayIcon from "./icon/GooglePlayIcon";
import CloseIcon from "./icon/CloseIcon";
class Modal extends React.Component {
  render() {
    const { store } = this.props;
    const album = store.openAlbum;
    return store.isModalOpen ? (
      <div className="modal">
        <div className="content">
          <div className="arrow">
            <CloseIcon onClick={() => store.toggleModal(null)} />
          </div>

          <div className="cover">
            <img
              src={"https://www.spirit-of-metal.com" + album.cover}
              alt="cover"
            />
          </div>
          <div className="info">
            <div className="author">{album.author}</div>
            <div className="title">{album.title}</div>
          </div>
          <div className="lastFM">
            <div>
              <div>
                <HeavyMetalIcon />
              </div>
              <div>{album.getListeners}</div>
            </div>
            <div>
              <div>
                <PlayIcon />
              </div>
              <div>{album.getPlayCount}</div>
            </div>
            <div>
              {!album.isGMLoaded && <Loader size="30" />}
              {album.isGMLoaded && album.GMLink && (
                <div>
                  <div>
                    <a href={album.GMLink} target="_blank">
                      <GooglePlayIcon />
                    </a>
                  </div>
                  <div>play</div>
                </div>
              )}

              {album.isGMLoaded && !album.GMLink && (
                <div className="not-available">No link</div>
              )}
            </div>
          </div>
          <div className="play" />
        </div>
      </div>
    ) : null;
  }
}
export default inject("store")(observer(Modal));
