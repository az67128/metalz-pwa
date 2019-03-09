import React from "react"

import "./scss/CoverPreview.scss"
import { observer } from "mobx-react"

class CoverPreview extends React.Component {
  render() {
    const { src, togglePreview } = this.props
    if (src === "") return null

    return (
      <div
        className="coverPreview coverPreview__overlay"
        onClick={() => togglePreview("")}
      >
        <div className="coverPreview__content">
          <img src={src} alt="album cover" />
        </div>
      </div>
    )
  }
}

export default observer(CoverPreview)
