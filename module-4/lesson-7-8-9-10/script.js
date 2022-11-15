"use strict";

let baseUrl = "https://n36-todolist.herokuapp.com";
let authToken = localStorage.getItem("token");

// ------------ GET USER LIST -------------------- //
function getUser() {
  fetch(`${baseUrl}/todos`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      token: authToken,
    },
  })
    .then((response) => response.json())
    .then((result) => renderData(result));
}

getUser();

// ------------ GET USER LIST -------------------- //

// ----------- RENDER FUNCTION -------------///
function renderData(data = []) {
  console.log(data);

  let averageScore = data.reduce((a, b) => {
    return a * 1 + b.score * 1;
  }, 0);

  if (data.length > 0) {
    $("#averager_score").innerHTML = ((averageScore / data.length) * 1).toFixed(
      2
    );
  }

  data.length > 0
    ? data.forEach((el) => {
        const tr = createElement(
          "tr",
          "item",
          ` <td>${el.id}</td>
    <td>${el.body}</td>
    <td>${el.user_id}</td> 
    <td> <button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" data-edit="${el.id}">EDIT</button> </td>
    <td> <button class="btn btn-danger" data-del="${el.id}">DELETE</button> </td>`
        );
        $("tbody").appendChild(tr);
      })
    : ($("tbody").innerHTML = "USERS LIST EMPTY");
}

// ----------- RENDER FUNCTION  END -------------///

// POST METHODS --------------------------------
const addUser = () => {
  const userName = $("#userName").value.trim();
  const userScore = $("#userScore").value.trim();

  console.log(authToken);

  if (userScore.length === 0 || userName.length === 0) {
    $(".toastify").style.backgroundColor = "crimson";
    $(".toastify").innerHTML = `<h5>Ma'lumot yetarli emas!</h5>`;
    $(".toastify").style.transform = "translateX(0)";

    setTimeout(() => {
      $(".toastify").style.transform = "translateX(200%)";
    }, 1500);
  } else {
    $(".toastify").style.backgroundColor = "lime";
    $(".toastify").innerHTML = `<h5>Muaffaqiyatli qo'shildi !</h5>`;
    $(".toastify").style.transform = "translateX(0)";

    setTimeout(() => {
      $(".toastify").style.transform = "translateX(200%)";

      fetch(`${baseUrl}/todos`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          token: authToken,
        },
        body: JSON.stringify({
          text: userName,
        }),
      })
        .then((res) => console.log(res))
        .catch((err) => console.log(err));
    }, 2000);

    setTimeout(() => {
      window.location.reload();
    }, 3000);
  }
};

$("#send").addEventListener("submit", () => {
  addUser();
});

// POST METHODS --------------------------------------------------------------

// ----------------DELETE FUNCTION-------

$("tbody").addEventListener("click", (e) => {
  if (e.target.classList.contains("btn-danger")) {
    let id = e.target.getAttribute("data-del");
    deleteUser(id);
  }
});

const deleteUser = (id) => {
  console.log(id);
  $(".toastify").style.transform = "translateX(0)";

  setTimeout(() => {
    $(".toastify").style.transform = "translateX(200%)";
    fetch(`${baseUrl}/todos/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        token: authToken,
      },
      body: JSON.stringify({}),
    });
  }, 2000);

  setTimeout(() => {
    window.location.reload();
  }, 3000);
};

// ----------------DELETE FUNCTION   -------

$("tbody").addEventListener("click", (e) => {
  if (e.target.classList.contains("btn-primary")) {
    let id = e.target.getAttribute("data-edit");
    localStorage.setItem("editUser", id);

    fetch(`${baseUrl}/todos/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        token: authToken,
      },
    })
      .then((res) => res.json())
      .then((result) => setValue(result))
      .catch((err) => console.log(err));
  }
});

function setValue(data) {
  setTimeout(() => {
    $("#userEdit").value = data.body;
    $("#scoreEdit").value = data.score;
  }, 2000);
}

const updateUser = () => {
  let id = localStorage.getItem("editUser");
   console.log(id);

  let newUser = $("#userEdit").value.trim();
  let newScore = $("#scoreEdit").value.trim();

  if (newUser.length === 0 || newScore.length === 0) {
    $(".toastify").style.backgroundColor = "crimson";
    $(".toastify").innerHTML = `<h5>Ma'lumot yetarli emas!</h5>`;
    $(".toastify").style.transform = "translateX(0)";

    setTimeout(() => {
      $(".toastify").style.transform = "translateX(200%)";
    }, 1500);
  } else {
     console.log("edited");
    fetch(`${baseUrl}/todos/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "token": authToken
      },
      body: JSON.stringify({
        body: newUser
      }),
    }).then((res)=>res.json()).then((res)=>console.log(res))
  }
};

$("#sendEdit").addEventListener("submit", () => {
  updateUser();
  console.log("ok");
});

function logined() {
  let userName = localStorage.getItem("userName");
  if (userName) {
    $("#login_user").innerHTML = `${userName}`;
  } else {
    window.location.replace("./login.html");
  }
}

logined();

$("#out").addEventListener("click", () => {
  localStorage.clear();
  logined();
});
