"use strict";


$('#mode').addEventListener('change', (e) => {

  localStorage.setItem('mode', e.target.value);
  darkMode()
})


function darkMode() {
  const mode = localStorage.getItem('mode');
  console.log(mode);
  console.log($('header'));
  $('header').style.backgroundColor = mode;
  $('footer').style.backgroundColor = mode;
}


(function () {
  const mode = localStorage.getItem('mode');
  $('header').style.backgroundColor = mode;
  $('footer').style.backgroundColor = mode;
}())


function multiLanguage() {
  const lang = {
    uz: {
      home: "Bosh sahifa",
      about: "Biz haqimizda",
      contact: "Aloqa",
      team: "Jamoa"
    },
    eng: {
      home: "Home",
      about: "About",
      contact: "Contact",
      team: "Team"
    }
  }

  localStorage.setItem('language', JSON.stringify(lang));
}

multiLanguage()


$('#lang').addEventListener('change', (e) => {
  const langs = JSON.parse(localStorage.getItem('language'))
  localStorage.setItem('selectedLanguage', e.target.value);
  selectLang(langs[e.target.value])
})


function selectLang(selectedLanguage) {
  console.log(selectedLanguage);

  const navItem = $$('.nav__ul--list-item');

  let lang = []

  for (let key in selectedLanguage) {
    lang.push(selectedLanguage[key])
  }

  navItem.forEach((e, i) => {
    e.textContent = lang[i]
  })

}

(
  function () {
    let select = localStorage.getItem('selectedLanguage')
    let langs = JSON.parse(localStorage.getItem('language'))
    console.log(select);
    console.log(langs);
    const selected = langs[select];
   
    selectLang(selected)
  }()
)
