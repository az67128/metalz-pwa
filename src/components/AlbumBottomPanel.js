import React from 'react';
import LastFmIcon from './icons/LastFmIcon';
import GoogleIcon from './icons/GoogleIcon';
import YandexIcon from './icons/YandexIcon';
import FanIcon from './icons/FanIcon';
import { observer } from 'mobx-react';

class AlbumBottomPanel extends React.Component {
  render() {
    const { lastfm_url, listeners, google_link, yandex_link } = this.props;
    return (
      <div className="buttonPanel">
        <div className="buttonPanel__wrapper buttonPanel__playcount">
          <div>
            <button className="iconButton" type="button">
              <FanIcon className="icon" />
            </button>
          </div>
          <div className="playcount__number">{Number(listeners).toLocaleString()}</div>
        </div>

        {yandex_link ? (
          <div className="buttonPanel__wrapper">
            <a
              href={`https://music.yandex.ru/album/${yandex_link}`}
              target="_blank"
              rel="noopener noreferrer">
              <button className="iconButton" type="button">
                <YandexIcon className="icon" />
              </button>
            </a>
          </div>
        ) : (
          <div className="buttonPanel__wrapper" />
        )}
        {google_link ? (
          <div className="buttonPanel__wrapper">
            <a
              href={`https://play.google.com/music/m/${google_link}`}
              target="_blank"
              rel="noopener noreferrer">
              <button className="iconButton" type="button">
                <GoogleIcon className="icon" />
              </button>
            </a>
          </div>
        ) : (
          <div className="buttonPanel__wrapper" />
        )}

        <div className="buttonPanel__wrapper">
          <a href={lastfm_url} target="_blank" rel="noopener noreferrer">
            <button className="iconButton" type="button">
              <LastFmIcon className="icon" />
            </button>
          </a>
        </div>
      </div>
    );
  }
}
export default observer(AlbumBottomPanel);
