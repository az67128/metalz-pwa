import React from "react";
import "../css/bottompanel.css";
import FireIcon from "./icon/FireIcon";
import GuitarIcon from "./icon/GuitarIcon";
import NextIcon from "./icon/NextIcon";
import { observer, inject } from "mobx-react";
class BottomPanel extends React.Component {
  render() {
    const { store } = this.props;
    return (
      <div className="bottom-panel">
        <div className="panel-container">
          <div className="sort">
            <div onClick={store.toggleSort}>
              {store.sortByRating ? "321" : "A-Z"}
            </div>
          </div>
          <div>
            <FireIcon
              color={store.onlyHot ? "#9a0007" : "black"}
              onClick={store.toggleHot}
            />
          </div>

          <div className="genre" onClick={store.toggleGenreModal}>
            <GuitarIcon color={store.genreFilter ? "#9a0007" : "black"} />
          </div>
        </div>
      </div>
    );
  }
}
export default inject("store")(observer(BottomPanel));
