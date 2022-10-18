"use strict";

movies.splice(50);

// ============= NORMLIZE MOVIES ==========////

const allMovies = movies.map((e) => {
  return {
    title: e.title,
    year: e.year,
    category: e.categories,
    id: e.imdbId,
    rating: e.imdbRating,
    time: `${Math.trunc(e.runtime / 60)} soat ${e.runtime % 60} daqiqa`,
    lang: e.language,
    yotube: `https://www.youtube.com/embed/${e.youtubeId}`,
    summary: e.summary,
    smallImg: e.smallThumbnail,
    largeImg: e.bigThumbnail,
  };
});

console.log(allMovies);

// ============= NORMLIZE MOVIES END ==========////
// EXTRA PLUGINS//

(function () {
  const date = new Date();
  const time = `${date.getFullYear()}`;
  $("#copyright").innerHTML = time;
})();
