import React, { useState, useRef } from "react";
import "./style.scss";
import { v4 as uuidv4 } from "uuid";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { baseURL } from "../../constants";

const index = () => {
  const [title, setTitle] = useState("");
  const [deadline, setDeadline] = useState("");

  const addTask = () => {
    const check = {
      title: title.trim().length === 0,
      deadline: deadline.trim().length === 0,
    };

    const newTask = {
      title: title,
      deadline: deadline,
    };

    if (check.title || check.deadline) {
      toast.error("Iltimos maydonlarni to'ldiring", {
        position: "bottom-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } else {
      fetch(`${baseURL}/userlist`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newTask),
      });

      toast.success("Muaffaqiyatli qo'shildi", {
        positione: "top-right",
        autoClose: 1400,
      });
    }

    setTitle("");
    setDeadline("");
  };

  return (
    <>
      <ToastContainer />
      <section>
        <div className="container">
          <div className="card p-3 shadow mt-5">
            <h4 className="text-center text-danger">USER ADD FORM</h4>
            <input
              type="text"
              className="form-control mx-auto w-50 p-3 mb-3"
              placeholder="Enter user name"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <input
              type="number"
              className="form-control mx-auto w-50 p-3"
              placeholder="Enter user age"
              value={deadline}
              onChange={(e) => setDeadline(e.target.value)}
            />
            <button
              className="btn btn-success p-3 mx-auto w-50 mt-3"
              onClick={() => addTask()}
            >
              ADD NEW USER
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default index;
