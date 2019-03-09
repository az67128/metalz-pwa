import React from "react"
import FanIcon from "./icons/FanIcon"
import "./scss/NoAlbums.scss"

export default class NoAlbums extends React.Component {
  render() {
    return (
      <div className="noAlbums">
        <FanIcon className="icon" /> Dude, no metal releases for this month
      </div>
    )
  }
}
