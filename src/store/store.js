import { observable, action, computed } from "mobx";
import { getMonthAlbum, getLastFm, getGooglePlayLink } from "../helper/main";
class Store {
  @observable albums;
  @observable isLoading = true;
  @observable onlyHot = false;
  @observable date = new Date();
  @observable isModalOpen = false;
  @observable openAlbum;
  @action
  toggleModal = (album = null) => {
    if (album !== null) {
      this.openAlbum = album;
      album.getGMLink();
    }
    this.isModalOpen = !this.isModalOpen;
  };
  @action
  setMonth = delta => {
    this.date = new Date(this.date.setMonth(this.date.getMonth() + delta));
    this.albums = [];
    this.isLoading = true;
    this.loadAlbums();
  };
  @action
  toggleHot = () => {
    this.onlyHot = !this.onlyHot;
  };
  @action
  loadAlbums = (page = 1) => {
    getMonthAlbum({
      year: this.date.getFullYear(),
      month: this.date.getMonth() + 1,
      page: page
    }).then(result => {
      if (
        result.month !== this.date.getMonth() + 1 ||
        result.year !== this.date.getFullYear()
      )
        return; //if month changed, do not update
      result.albums.forEach(album => {
        this.albums.push(new Album(album));
      });
      if (!result.isFinal) {
        //this.loadAlbums(++page);
      } else {
        this.isLoading = false;
      }
    });
  };

  @computed
  get getAlbums() {
    if (this.onlyHot) {
      return this.albums.filter(item => {
        return item.isHot;
      });
    } else {
      return this.albums;
    }
  }
  @computed
  get getMonthName() {
    return this.date.toLocaleString("en-us", { month: "short" });
  }
  @computed
  get getYear() {
    return this.date.getFullYear();
  }

  constructor() {
    this.albums = [];
    this.loadAlbums();
  }
}
class Album {
  @observable author;
  @observable cover;
  @observable title;
  @observable genre;
  @observable listeners;
  @observable playcount;
  @observable GMLink;
  @observable isGMLoaded = false;
  constructor(album) {
    this.author = album.author;
    this.cover = album.cover;
    this.title = album.title;
    this.genre = album.genre;
    getLastFm(this.author, this.title).then(result => {
      this.setLastFmData(result);
    });
  }
  @computed
  get getPlayCount() {
    return this.playcount ? Number(this.playcount).toLocaleString() : "";
  }
  @computed
  get getListeners() {
    return this.listeners ? Number(this.listeners).toLocaleString() : "";
  }
  @computed
  get isHot() {
    return Number(this.playcount) > 500 || Number(this.listeners) > 50;
  }
  @action
  getGMLink = () => {
    getGooglePlayLink(this.author, this.title).then(link => {
      this.GMLink = link;
      this.isGMLoaded = true;
    });
  };
  @action
  setLastFmData = lastFm => {
    if (lastFm.error) return;
    this.listeners = lastFm.album.listeners;
    this.playcount = lastFm.album.playcount;
  };
}
const store = (window.store = new Store());
export default store;
