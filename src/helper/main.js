import request from "superagent";
export function getYandexMusicLink(author, album) {
  return request
    .get(
      `https://cors-anywhere.herokuapp.com/https://music.yandex.ru/search?text=${encodeURIComponent(
        author
      )}%20${encodeURIComponent(album)}`
    )
    .then(res => {
      const content = document.createElement("div");
      content.innerHTML = res.text;
      const albumLink = content.querySelector(".album__caption");
      if (albumLink && albumLink.innerText === album) {
        return "https://music.yandex.ru/album/" + albumLink.href.split("/")[4];
      } else {
        return null;
      }
    })
    .catch(err => {
      return null;
    });
}
export function getGooglePlayLink(author, album) {
  return request
    .get(
      `https://cors-anywhere.herokuapp.com/https://play.google.com/store/search?q=${encodeURIComponent(
        author
      )}%20${encodeURIComponent(album)}`
    )
    .then(res => {
      const content = document.createElement("div");
      content.innerHTML = res.text;
      const albumLink = content.querySelector(".square-cover.music .title");
      if (albumLink && albumLink.title === album) {
        return `https://play.google.com/music/m/${
          albumLink.href.split("=")[1]
        }?t=`;
      } else {
        return null;
      }
    })
    .catch(err => {
      return null;
    });
}
export function getLastFm(author, album) {
  return request
    .get(
      `https://ws.audioscrobbler.com/2.0/?method=album.getinfo&api_key=77b4b75091c4379bcb5718b66884d43c&artist=${author}&album=${album}&format=json`
    )
    .then(res => {
      return res.body;
    });
}

export function getMonthAlbum(options = {}) {
  options.year = options.year || new Date().getFullYear();
  options.month = options.month || new Date().getMonth() + 1;
  options.page = options.page || 1;
  if (options.month < 10) options.month = "0" + options.month;
  return request
    .get(
      "https://cors-anywhere.herokuapp.com/https://www.spirit-of-metal.com/en/albums/" +
        options.year +
        "/" +
        options.month +
        "/" +
        options.page
    )
    .then(res => {
      const content = document.createElement("div");
      content.innerHTML = res.text;
      const albums = [...content.getElementsByClassName("AlbumResult")].map(
        item => {
          const album = item.querySelector("h3");
          let author = album.innerText;
          if (author.indexOf("(") > 0) {
            author = author.split("(")[0].trim();
          }
          return {
            author: author,
            cover: item.querySelector("img").getAttribute("src"),
            title: album.nextSibling.textContent,
            genre: album.nextSibling.nextSibling.nextSibling
              ? album.nextSibling.nextSibling.nextSibling.textContent
              : ""
          };
        }
      );
      return {
        albums: albums,
        isFinal:
          content.querySelector("#AlbumList").innerText ===
          "No result for this search",
        page: options.page,
        month: Number(options.month),
        year: options.year
      };
    });
}
