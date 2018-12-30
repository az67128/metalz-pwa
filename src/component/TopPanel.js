import React from "react";
import "../css/toppanel.css";

import NextIcon from "./icon/NextIcon";
import { observer, inject } from "mobx-react";
class TopPanel extends React.Component {
  render() {
    const { store } = this.props;
    return (
      <div className="top-panel">
        <div className="panel-container">
          <div>
            <NextIcon
              flip={true}
              onClick={() => {
                store.setMonth(-1);
              }}
            />
          </div>

          <div className="date">
            <div>{store.getMonthName + " " + store.getYear}</div>
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
export default inject("store")(observer(TopPanel));
