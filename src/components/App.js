import React from 'react';
import TopBar from './TopBar';
import BottomBar from './BottomBar';
import Content from './Content';
import './scss/App.scss';
import CoverPreview from './CoverPreview';
import { observer, inject } from 'mobx-react';
import GenreSelect from './GenreSelect';

class App extends React.Component {
  render() {
    const {
      date,
      isLoading,
      coverPreview,
      sortByRating,
      isYandexActive,
      isGoogleActive,
      albumList,
      togglePreview,
      changeMonth,
      addToHateList,
      toggleFilter,
      handleScroll,
      isGenreSelect,
      selectGenre,
      genreFilter,
    } = this.props.store;
    return (
      <div className="app">
        <TopBar changeMonth={changeMonth} date={date} />
        <div style={{ overflowX: 'hidden' }}>
          <Content
            albums={albumList}
            isLoading={isLoading}
            addToHateList={addToHateList}
            togglePreview={togglePreview}
            handleScroll={handleScroll}
            changeMonth={changeMonth}
          />
        </div>
        <BottomBar
          isYandexActive={isYandexActive}
          isGoogleActive={isGoogleActive}
          sortByRating={sortByRating}
          toggleFilter={toggleFilter}
          genreFilter={genreFilter}
        />
        <CoverPreview src={coverPreview} togglePreview={togglePreview} />
        <GenreSelect isVisible={isGenreSelect} onClose={toggleFilter} onSelect={selectGenre} />
      </div>
    );
  }
}

export default inject('store')(observer(App));
