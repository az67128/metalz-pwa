import React from "react";
import "./scss/Content.scss";
import Album from "./Album";
import Loader from "./Loader";
import { observer } from "mobx-react";
import NoAlbums from "./NoAlbums";

class Content extends React.Component {
  state = {
    mouseDown: false,
    startScreenX: 0,
    offsetX: 0
  };
  componentDidMount() {
    window.addEventListener("scroll", this.props.handleScroll);
  }
  componentWillUnmount() {
    window.removeEventListener("scroll", this.props.handleScroll);
  }
  onMouseDown = e => {
    const startScreenX = e.touches ? e.touches[0].screenX : e.screenX;
    this.setState({ mouseDown: true, startScreenX: startScreenX });
  };
  onMouseUp = () => {
    this.setState({ mouseDown: false, offsetX: 0 });
  };
  onMouseMove = e => {
    const newScreenX = e.touches ? e.touches[0].screenX : e.screenX;
    if (!this.state.mouseDown) return;

    if (this.state.mouseDown) {
      const { startScreenX } = this.state;
      const delta = Math.abs(newScreenX - startScreenX);
      if (delta < 15) return;
      if (delta > window.innerWidth / 3) {
        this.setState({ offsetX: 0, mouseDown: false, startScreenX: 0 }, () => {
          if (newScreenX - startScreenX > 0) {
            this.props.changeMonth(-1);
          } else {
            this.props.changeMonth(1);
          }
        });
        return;
      }

      this.setState({ offsetX: newScreenX - startScreenX });
    }
  };
  render() {
    const { albums, isLoading, addToHateList, togglePreview } = this.props;
    const { offsetX } = this.state;

    return (
      <div
        style={{
          left: `${offsetX}px`
        }}
        className="content"
        onMouseDown={this.onMouseDown}
        onMouseUp={this.onMouseUp}
        onMouseMove={this.onMouseMove}
        onTouchStart={this.onMouseDown}
        onTouchEnd={this.onMouseUp}
        onTouchMove={this.onMouseMove}
      >
        {isLoading ? (
          <Loader />
        ) : albums.length > 0 ? (
          albums.map(album => (
            <Album
              key={album.album_id}
              album={album}
              addToHateList={addToHateList}
              togglePreview={togglePreview}
            />
          ))
        ) : (
          <NoAlbums />
        )}
      </div>
    );
  }
}

export default observer(Content);
