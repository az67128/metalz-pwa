import React from "react";
import "../css/bottompanel.css";
import FireIcon from "./icon/FireIcon";

import NextIcon from "./icon/NextIcon";
import { observer, inject } from "mobx-react";
class BottomPanel extends React.Component {
  render() {
    const { store } = this.props;
    return (
      <div className="bottom-panel">
        <div className="panel-container">
          <div>
            <NextIcon
              flip={true}
              onClick={() => {
                store.setMonth(-1);
              }}
            />
          </div>
          <div>
            <FireIcon
              color={store.onlyHot ? "#9a0007" : "black"}
              onClick={store.toggleHot}
            />
          </div>
          <div className="date">
            <div>{store.getMonthName}</div>
            <div>{store.getYear}</div>
          </div>
          <div className="sort">
            <div onClick={store.toggleSort}>
              {store.sortByRating ? "321" : "A-Z"}
            </div>
          </div>
          <div>
            <NextIcon
              onClick={() => {
                store.setMonth(1);
              }}
            />
          </div>
        </div>
      </div>
    );
  }
}
export default inject("store")(observer(BottomPanel));
