import React from "react";
import "./scss/BottomBar.scss";
import GuitarIcon from "./icons/GuitarIcon";
import YandexIcon from "./icons/YandexIcon";
import GoogleIcon from "./icons/GoogleIcon";
import { observer } from "mobx-react";

class BottomBar extends React.Component {
  render() {
    const {
      sortByRating,
      toggleFilter,
      isYandexActive,
      isGoogleActive,
      genreFilter
    } = this.props;
    return (
      <footer className="bottomBar">
        <div className="bottomBar__wrapper">
          <div>
            <button className="iconButton" type="button">
              <GuitarIcon
                className={`icon ${genreFilter ? "filter--active" : ""}`}
                onClick={() => toggleFilter("isGenreSelect")}
              />
            </button>
          </div>
          <div>
            <button className="iconButton" type="button">
              <YandexIcon
                className={`icon ${isYandexActive ? "filter--active" : ""}`}
                onClick={() => toggleFilter("isYandexActive")}
              />
            </button>
          </div>
          <div>
            <button className="iconButton" type="button">
              <GoogleIcon
                className={`icon ${isGoogleActive ? "filter--active" : ""}`}
                onClick={() => toggleFilter("isGoogleActive")}
              />
            </button>
          </div>
          <div
            className="sortButton"
            onClick={() => toggleFilter("sortByRating")}
          >
            <button className="iconButton" type="button">
              {sortByRating ? "321" : "A-Z"}
            </button>
          </div>
        </div>
      </footer>
    );
  }
}

export default observer(BottomBar);
