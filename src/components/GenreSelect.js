import React from "react";
import { observer } from "mobx-react";
import "./scss/GenreSelect.scss";
import genre from "../constant/genre";

class GenreSelect extends React.Component {
  resetGenre = () => {
    this.props.onClose("isGenreSelect");
    this.props.onSelect("");
  };
  selectGenre = genre => {
    this.props.onClose("isGenreSelect");
    this.props.onSelect(genre);
  };
  componentDidUpdate(prevProps) {
    if (this.props.isVisible !== prevProps.isVisible) {
      if (this.props.isVisible) {
        document.querySelector("html").classList.add("noScroll");
        document.querySelector("body").classList.add("noScroll");
      } else {
        document.querySelector("html").classList.remove("noScroll");
        document.querySelector("body").classList.remove("noScroll");
      }
    }
  }

  componentWillUnmount() {
    document.querySelector("html").classList.remove("noScroll");
    document.querySelector("body").classList.remove("noScroll");
  }
  render() {
    const { isVisible } = this.props;
    if (!isVisible) return null;
    return (
      <div className="genreSelect">
        <div className="topBar">
          <div className="topBar__wrapper">
            <div className="title">Select genre</div>
            <div onClick={this.resetGenre} className="resetButton">
              RESET
            </div>
          </div>
        </div>
        <div className="genreList">
          <div className="genreList__wrapper">
            {genre.map(item => (
              <div
                key={item}
                className="genre"
                onClick={() => this.selectGenre(item)}
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default observer(GenreSelect);
