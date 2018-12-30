import React from "react";
import "../css/genremodal.css";
import { observer, inject } from "mobx-react";
import CloseIcon from "./icon/CloseIcon";
import genre from "../constant/genre";
class GenreModal extends React.Component {
  render() {
    const { store } = this.props;

    return store.isGenreModalOpen ? (
      <div className="genre-modal">
        <div className="content">
          <div className="top-bar">
            <div className="title">Select genre</div>
            <div className="cancel" onClick={this.closeModal}>
              RESET
            </div>
          </div>
          <div>
            {genre.map(item => {
              return (
                <div
                  className="genre"
                  key={item}
                  onClick={() => {
                    this.selectGenre(item);
                  }}
                >
                  {item}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    ) : null;
  }
  closeModal = () => {
    this.props.store.setGenreFilter("");
    this.props.store.toggleGenreModal();
  };
  selectGenre = genre => {
    this.props.store.setGenreFilter(genre);
    this.props.store.toggleGenreModal();
  };
}
export default inject("store")(observer(GenreModal));
