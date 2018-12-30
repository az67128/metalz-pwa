import React from "react";
import { observer, inject } from "mobx-react";
import Album from "./Album";
import Loader from "./Loader";
import BottomPanel from "./BottomPanel";
import TopPanel from "./TopPanel";
import Modal from "./Modal";
import GenreModal from "./GenreModal";
class App extends React.Component {
  render() {
    const { store } = this.props;
    return (
      <div>
        <TopPanel />
        <div
          className={
            "content-container " + (store.isModalOpen ? "no-scroll" : "scroll")
          }
        >
          {store.getAlbums.map(album => {
            return (
              <Album
                album={album}
                onClick={store.toggleModal}
                key={album.author + album.title}
              />
            );
          })}
          {store.isLoading ? <Loader /> : null}
          {!store.isLoading && store.getAlbums.length === 0 ? (
            <div className="no-releases">
              No metal releases this month
              {store.genreFilter ? " in genre " + store.genreFilter : ""}
            </div>
          ) : null}
        </div>
        <BottomPanel />
        <Modal />
        <GenreModal />
      </div>
    );
  }
}

export default inject("store")(observer(App));
