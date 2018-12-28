import React from "react";
import { observer, inject } from "mobx-react";
import Album from "./Album";
import Loader from "./Loader";
import BottomPanel from "./BottomPanel";
import Modal from "./Modal";
class App extends React.Component {
  render() {
    const { store } = this.props;
    return (
      <div>
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
            <div>No metal releases this month</div>
          ) : null}
        </div>
        <BottomPanel />
        <Modal />
      </div>
    );
  }
}

export default inject("store")(observer(App));
