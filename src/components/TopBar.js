import React from "react";
import "./scss/TopBar.scss";
import NextIcon from "./icons/NextIcon";
import { observer } from "mobx-react";

class TopBar extends React.Component {
  render() {
    const { changeMonth, date } = this.props;
    const year = date.getFullYear();
    return (
      <div className="topBar">
        <div className="topBar__wrapper">
          <div onClick={() => changeMonth(-1)}>
            <button className="iconButton" type="button">
              <NextIcon className="icon flip" />
            </button>
          </div>
          <div className="date">
            {date.toLocaleString("en-us", { month: "short" })} {year}
          </div>

          <div onClick={() => changeMonth(1)}>
            <button className="iconButton" type="button">
              <NextIcon className="icon" />
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default observer(TopBar);
