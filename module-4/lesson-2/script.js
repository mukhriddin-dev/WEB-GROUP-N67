"use strict";

movies.splice(40);

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

// ============= NORMLIZE MOVIES END ==========////
// EXTRA PLUGINS//

(function () {
  const date = new Date();
  const time = `${date.getFullYear()}`;
  $("#copyright").innerHTML = time;
})();

// ============ ====== ====== ======  RENDER FUNCTION====== ====== ====== ====== ====== ====
function renderAllMovies() {
  allMovies.forEach((e) => {
    const card = createElement(
      "div",
      "card shadow",
      `
  <img src="${e.smallImg}" alt="rasm" class="card-img">
  <div class="card-body">
    <h5 class="card-title">${e.title}</h5>
    <ul>
      <li><strong>Year: </strong>${e.year}</li>
      <li><strong>Category: </strong>${e.category}</li>
      <li><strong>Rating:</strong>${e.rating}</li>
    </ul>
    
    <a href="${e.yotube}" target="_blank" class="btn btn-danger">YouTube </a>
    <button data-id=${e.id} class="btn btn-primary modal-open">
      read more
    </button>
    <span data-bookmark=${e.id} class="bg-warning p-2 rounded-5 bookmark"><i data-bookmark=${e.id} class="bi bookmark bi-bookmark-heart"></i></span>

  </div>

`
    );

    card.dataset.moieId = e.id;

    $(".wrapper-films").appendChild(card);
  });
}

renderAllMovies();

// ============ ====== ====== ======  RENDER FUNCTION END====== ====== ====== ====== ====== ====

// ============ ====== ====== ====== DYNAMIC CATEGORIES ====== ====== ====== ====== ====== ====

function dynamicCategory() {
  let category = [];
  allMovies.forEach((e) => {
    e.category.forEach((e) => {
      if (!category.includes(e)) {
        category.push(e);
      }
    });
  });

  category.sort();

  category.forEach((e) => {
    const option = createElement("option", "item-c", e);
    $("#category_sort").appendChild(option);
  });
}

dynamicCategory();

// ============ ====== ====== ====== DYNAMIC CATEGORIES end ====== ====== ====== ====== ====== ====

// ============ ====== ====== ====== FIND FILMS START ====== ====== ====== ====== ====== ====//
const findFilm = (str, rat, ctg) => {
  return allMovies.filter((e) => {
    return e.title.match(str) && e.rating >= rat && e.category.includes(ctg);
  });
};

$(".btn-success").addEventListener("click", () => {
  $(".wrapper-films").innerHTML = `"<span class="loader"></span>"`;
  const searchValue = $("#film_name").value.toLowerCase().trim();
  const ratingFilm = $("#rating").value;
  const categorySort = $("#category_sort").value;

  console.log(ratingFilm);

  const searchtext = new RegExp(searchValue, "gi");

  const searchResult = findFilm(searchtext, ratingFilm, categorySort);

  setTimeout(() => {
    $(".wrapper-films").innerHTML = "";
    renderSearchResult(searchResult);
    $(
      ".result"
    ).innerHTML = `<h2 class="text-danger">${searchResult.length} ta ma'lumot topildi</h2>`;
  }, 3000);
});

// ============ ====== ====== ====== FIND FILMS END ====== ====== ====== ====== ====== ====//

function renderSearchResult(data = []) {
  data.forEach((e) => {
    const card = createElement(
      "div",
      "card shadow",
      `
  
  <img src="${e.smallImg}" alt="rasm" class="card-img">
  <div class="card-body">
    <h5 class="card-title">${e.title}</h5>
    <ul>
      <li><strong>Year: </strong>${e.year}</li>
      <li><strong>Category: </strong>${e.category}</li>
      <li><strong>Rating:</strong>${e.rating}</li>
    </ul>
    <a href="${e.yotube}" target="_blank" class="btn btn-danger">YouTube </a>
    <button data-id=${e.id} class="btn btn-primary modal-open">
      read more
    </button>
    <span data-bookmark=${e.id} class="bg-warning p-2 rounded-5 bookmark"><i class="bi bi-bookmark-heart bookmark" data-bookmark=${e.id}></i></span>

  </div>

`
    );

    $(".wrapper-films").appendChild(card);
  });
}

//  ---------------------- MODAL WINDOW --------------------------

// ------- close btn -----

$("#close").addEventListener("click", () => {
  $(".modal-contents").classList.add("d-none");
});

//  ---------------------- MODAL WINDOW SHOW --------------------------

function modalWindow(id) {
  $(".wrap").innerHTML = "";
  const filmItem = allMovies.filter((e) => {
    return e.id === id;
  });
  const data = filmItem[0];
  console.log(data);

  const contents = createElement(
    "div",
    "content-film",
    `
  <img src="${data.smallImg}" height="100" alt="rasm" class="card-imgs"></td>

  <h3>${data.title}</h3>
  <p>${data.summary}</p>
  
  `
  );

  $(".wrap").appendChild(contents);
}

//  ---------------------- MODAL WINDOW SHOW END ---------------------

// ---------------BOOKMARK ITEM ADD -------------------

const bookmark = [];

function addBookmark(id) {

  $(".bookmarks").innerHTML = "";
  
  const el = allMovies.filter(element => {
    return element.id === id
  })
  if (!bookmark.includes(el[0])) {
    bookmark.push(el[0])
  } else {
    alert('Avval qo\'shilgan')
  }

  if (bookmark.length > 0) {

    bookmark.forEach((e) => {
      const item = createElement('div', 'card', `<h5>${e.title}</h5>`);
      $(".bookmarks").appendChild(item);
    })
  }


}
















//------------------ window events -------------------///

//--------------- MODAL ---------------//
window.addEventListener("click", (e) => {
  if (e.target.classList.contains("modal-contents")) {
    $(".modal-content").classList.toggle("shadow-lg");
  }

  if (e.target.classList.contains("modal-open")) {
    $(".modal-contents").classList.remove("d-none");
    console.log(e.target.getAttribute("data-id"));
    modalWindow(e.target.getAttribute("data-id"));
  }

  // ---------------BOOKMARK -------------------

  if (e.target.classList.contains('bookmark')) {
    console.log(e.target.getAttribute("data-bookmark"));
    addBookmark(e.target.getAttribute("data-bookmark"))
  }


});

//  ---------------------- MODAL WINDOW END--------------------------