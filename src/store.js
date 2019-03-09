import { types, flow } from "mobx-state-tree";
import get from "./helpers/index";

const Album = types.model("Album", {
  album_id: types.number,
  author: types.string,
  title: types.string,
  cover_url: types.string,
  genre: types.string,
  lastfm_url: types.maybeNull(types.string),
  listeners: types.maybeNull(types.number),
  playcount: types.maybeNull(types.number),
  google_link: types.maybeNull(types.string),
  yandex_link: types.maybeNull(types.string)
});
const Store = types
  .model("Store", {
    albums: types.array(Album),
    date: types.optional(types.Date, new Date()),
    isLoading: types.optional(types.boolean, false),
    hateList: types.optional(types.array(types.number), []),
    coverPreview: types.optional(types.string, ""),
    sortByRating: types.optional(types.boolean, true),
    isYandexActive: types.optional(types.boolean, false),
    isGoogleActive: types.optional(types.boolean, false),
    genreFilter: types.optional(types.string, ""),
    viewLimit: types.optional(types.number, 30),
    maxScroll: types.optional(types.number, 0),
    isGenreSelect: types.optional(types.boolean, false)
  })
  .actions(self => {
    const store = self;
    const loadAlbums = flow(function* fetchProjects() {
      store.resetScroll();
      const date = store.date;
      store.isLoading = true;
      try {
        store.albums = yield get(date.getFullYear(), date.getMonth() + 1);
        store.isLoading = false;
      } catch (e) {
        store.isLoading = false;
      }
    });
    const loadHateList = () => {
      const hateList = localStorage.getItem("hateList")
        ? JSON.parse(localStorage.getItem("hateList"))
        : [];
      store.hateList = hateList;
    };
    const addToHateList = album_id => {
      localStorage.setItem(
        "hateList",
        JSON.stringify([...store.hateList, album_id])
      );
      store.hateList.push(album_id);
    };
    const toggleFilter = prop => {
      store.resetScroll();
      store[prop] = !store[prop];
    };
    const togglePreview = url => {
      store.coverPreview = !!url ? url : "";
    };
    const afterCreate = () => {
      store.loadHateList();
      store.loadAlbums();
    };
    const changeMonth = delta => {
      const date = store.date;
      const moveTo = new Date(date.setMonth(date.getMonth() + delta));
      store.date = moveTo;
      store.loadAlbums();
    };
    const showMore = () => {
      store.viewLimit += 10;
    };
    const handleScroll = () => {
      if (getComputedStyle(document.body).scroll === "hidden") return;
      const scrolled = window.pageYOffset || document.documentElement.scrollTop;
      if (scrolled - store.maxScroll > 150) {
        store.viewLimit += 5;
        store.maxScroll = scrolled;
      }
    };
    const resetScroll = () => {
      window.scrollTo(0, 0);
      store.viewLimit = 30;
      store.maxScroll = 0;
    };
    const selectGenre = genre => {
      store.genreFilter = genre;
    };
    return {
      loadAlbums,
      loadHateList,
      addToHateList,
      toggleFilter,
      togglePreview,
      afterCreate,
      changeMonth,
      showMore,
      handleScroll,
      resetScroll,
      selectGenre
    };
  })
  .views(self => {
    return {
      get albumList() {
        return self.albums
          .filter(album => {
            const hateFilter = !self.hateList.includes(album.album_id);
            const yandexFilter = self.isYandexActive ? album.yandex_link : true;
            const googleFilter = self.isGoogleActive ? album.google_link : true;
            const genreFilter = self.genreFilter
              ? album.genre === self.genreFilter
              : true;
            return hateFilter && yandexFilter && googleFilter && genreFilter;
          })
          .sort((a, b) => {
            if (self.sortByRating) {
              return b.listeners - a.listeners;
            } else {
              if (a.author < b.author) {
                return -1;
              }
              if (a.author > b.author) {
                return 1;
              }
              return 0;
            }
          })
          .slice(0, self.viewLimit);
      }
    };
  });

export default Store;
