"use strict";

// ------------ GET USER LIST -------------------- //
function getUser() {
   fetch('http://localhost:8000/user')
      .then((response) => response.json())
      .then((result) => renderData(result))
}

getUser()

// ------------ GET USER LIST -------------------- //


// ----------- RENDER FUNCTION -------------///
function renderData(data = []) {

   let averageScore = data.reduce((a, b) => {
      return (a * 1 + b.score * 1);
   },0)

$('#averager_score').innerHTML=(averageScore/data.length*1).toFixed(2)

   data.length > 0 ? data.forEach((el) => {
      const tr = createElement('tr', "item", ` <td>${el.id}</td>
    <td>${el.user_name}</td>
    <td>${el.score}</td> 
    <td> <button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" data-edit="${el.id}">EDIT</button> </td>
    <td> <button class="btn btn-danger" data-del="${el.id}">DELETE</button> </td>`);
      $('tbody').appendChild(tr);

   }) : $('tbody').innerHTML = "USERS LIST EMPTY"

}

// ----------- RENDER FUNCTION  END -------------///



// POST METHODS --------------------------------
const addUser = () => {
   const userName = $("#userName").value.trim();
   const userScore = $("#userScore").value.trim();


   if (userScore.length === 0 || userName.length === 0) {

      $('.toastify').style.backgroundColor = "crimson";
      $('.toastify').innerHTML = `<h5>Ma'lumot yetarli emas!</h5>`
      $('.toastify').style.transform = 'translateX(0)';

      setTimeout(() => {
         $('.toastify').style.transform = 'translateX(200%)';
      }, 1500)

   } else {
      $('.toastify').style.backgroundColor = "lime";
      $('.toastify').innerHTML = `<h5>Muaffaqiyatli qo'shildi !</h5>`
      $('.toastify').style.transform = 'translateX(0)';

      setTimeout(() => {
         $('.toastify').style.transform = 'translateX(200%)';
         fetch('http://localhost:8000/user', {
            method: "POST",
            headers: {
               "Content-Type": "application/json",
            },
            body: JSON.stringify({
               user_name: userName,
               score: userScore
            })
         })

      }, 2000)
   }
}


$('#send').addEventListener('submit', () => {

   addUser()
})

// POST METHODS --------------------------------------------------------------


// ----------------DELETE FUNCTION-------

$('tbody').addEventListener('click', (e) => {
   if (e.target.classList.contains('btn-danger')) {
      let id = e.target.getAttribute('data-del');
      deleteUser(id);
   }
})


const deleteUser = (id) => {

   $('.toastify').style.transform = 'translateX(0)';


   setTimeout(() => {

      $('.toastify').style.transform = 'translateX(200%)';
      fetch(`http://localhost:8000/user/${id}`, {
         method: "DELETE",
         headers: {
            "Content-Type": "application/json"
         },
         body: JSON.stringify({})
      })

   }, 2000)
}


// ----------------DELETE FUNCTION   -------


$('tbody').addEventListener('click', (e) => {

   if (e.target.classList.contains('btn-primary')) {

      let id = e.target.getAttribute('data-edit');
      localStorage.setItem('editUser', id);

      fetch(`http://localhost:8000/user/${id}`)
         .then((res => res.json()))
         .then((result => setValue(result)))
         .catch((err) => console.log(err))

   }


})




const updateUser = () => {

   let id = localStorage.getItem("editUser")

   let newUser = $('#userEdit').value.trim();
   let newScore = $('#scoreEdit').value.trim();


   if (newUser.length === 0 || newScore.length === 0) {
      $('.toastify').style.backgroundColor = "crimson";
      $('.toastify').innerHTML = `<h5>Ma'lumot yetarli emas!</h5>`
      $('.toastify').style.transform = 'translateX(0)';

      setTimeout(() => {
         $('.toastify').style.transform = 'translateX(200%)';
      }, 1500)

   } else {
      fetch(`http://localhost:8000/user/${id}`, {

         method: "PUT",
         headers: {
            "Content-Type": "application/json"
         },
         body: JSON.stringify({
            user_name: newUser,
            score: newScore
         })
      })
   }

}


$('#sendEdit').addEventListener('submit', () => {
   updateUser()
})



function setValue(data) {
   $('#userEdit').value = data.user_name;
   $('#scoreEdit').value = data.score;
}