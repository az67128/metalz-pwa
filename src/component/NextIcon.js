import React from "react";
import { observer } from "mobx-react";
class FireIcon extends React.Component {
  render() {
    const { flip, onClick } = this.props;
    return (
      <svg
        onClick={onClick}
        x="0px"
        y="0px"
        width="30px"
        height="30px"
        viewBox="0 0 477.175 477.175"
        transform={"rotate(" + (flip ? "180" : "0") + ")"}
      >
        <g>
          <path
            d="M360.731,229.075l-225.1-225.1c-5.3-5.3-13.8-5.3-19.1,0s-5.3,13.8,0,19.1l215.5,215.5l-215.5,215.5
		c-5.3,5.3-5.3,13.8,0,19.1c2.6,2.6,6.1,4,9.5,4c3.4,0,6.9-1.3,9.5-4l225.1-225.1C365.931,242.875,365.931,234.275,360.731,229.075z
		"
          />
        </g>
      </svg>
    );
  }
}
export default observer(FireIcon);
