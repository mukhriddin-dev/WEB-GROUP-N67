"use strict";

const BASE_URL = "https://n36-todolist.herokuapp.com"



const auth = () => {
   const username = $('#user').value.trim();
   const password = $('#password').value.trim();

   const params = {
      login: username,
      password: password
   }

   console.log(params);



   fetch(`${BASE_URL}/login`, {
         method: "POST",
         headers: {
            "Content-Type": "application/json",
         },
         body: JSON.stringify(params)
      }).then((result) => result.json())
      .then(res => {
         console.log(res);



         if (res.message) {
            $('.modal-toast').innerHTML = `<strong>${res.message}</strong>`;
            $('.modal-toast').classList.remove('hide-toast');

            setTimeout(() => {
               $('.modal-toast').classList.add('hide-toast');
            }, 2000)
         }




         if (res.token) {

            localStorage.setItem('token', res.token)
            localStorage.setItem('userName', params.login)
            
            $('.modal-toast').classList.remove('alert-danger');
            $('.modal-toast').classList.add('alert-success');
            $('.modal-toast').innerHTML = `<strong>${"SUCCESFULLY LOGIN"}</strong>`;
            $('.modal-toast').classList.remove('hide-toast');
            setTimeout(() => {
               $('.modal-toast').classList.add('hide-toast');
               window.location.replace("./index.html")
            }, 2000)

         }


      })




}

$('#login').addEventListener("submit", (e) => {
   e.preventDefault();
   auth()

})