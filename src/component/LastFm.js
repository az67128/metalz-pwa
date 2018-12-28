import React from "react";
import { observer } from "mobx-react";
import FireIcon from "./icon/FireIcon";
class LastFm extends React.Component {
  render() {
    const { album } = this.props;
    return (
      <div className="lastFm">
        {album.isHot ? (
          <div className="hot">
            <FireIcon />
          </div>
        ) : null}
        <div className="listeners">{album.getListeners}</div>
      </div>
    );
  }
}
export default observer(LastFm);
