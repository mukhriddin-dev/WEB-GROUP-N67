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
    <button class="btn btn-primary">
      read more
    </button>

  </div>

`
    );

    card.dataset.moieId=e.id;

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
const findFilm = (str,rat, ctg ) => {

  return allMovies.filter((e) => {
    return e.title.match(str) && e.rating >= rat && e.category.includes(ctg)  ;
  })



}

$(".btn-success").addEventListener('click', () => {
  $(".wrapper-films").innerHTML=`"<span class="loader"></span>"`;
  const searchValue = $("#film_name").value.toLowerCase().trim();
  const ratingFilm=$('#rating').value;
  const categorySort=$("#category_sort").value;


  console.log(ratingFilm);

  const searchtext = new RegExp(searchValue, "gi");

  const searchResult = findFilm(searchtext, ratingFilm, categorySort);

 setTimeout(()=>{
  $(".wrapper-films").innerHTML="";
  renderSearchResult(searchResult);
  $('.result').innerHTML=`<h2 class="text-danger">${searchResult.length} ta ma'lumot topildi</h2>`;
 },3000)


 

})

 // ============ ====== ====== ====== FIND FILMS END ====== ====== ====== ====== ====== ====//


 function renderSearchResult(data=[]){
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
    <button class="btn btn-primary">
      read more
    </button>

  </div>

`
    );

    $(".wrapper-films").appendChild(card);
  });
 }



//  ---------------------- MODAL WINDOW --------------------------
 

// ------- close btn -----

$('#close').addEventListener('click', ()=>{
  $('.modal-contents').classList.add('d-none')
})


function modalWindow(){
  
}



//  ---------------------- MODAL WINDOW END--------------------------