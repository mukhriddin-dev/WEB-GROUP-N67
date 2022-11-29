import React, { useState, useRef } from "react";
import Card from "../../UI/Card";
import "./style.scss";
import { user } from "./data";
import { v4 as uuidv4 } from "uuid";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const index = () => {
  const [task, setTask] = useState([]);

  const [title, setTitle] = useState("");
  const [deadline, setDeadline] = useState("");

  const addTask = () => {
    const check = {
      title: title.trim().length === 0,
      deadline: deadline.trim().length === 0,
    };

    const newTask = {
      id: uuidv4(),
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
      setTask([...task, newTask]);
      toast.success("Muaffaqiyatli qo'shildi", {
        positione: "top-right",
        autoClose: 1400,
      });
    }

    setTitle("");
    setDeadline("");
  };

  const deleteTask = (id) => {
    const newTasks = task.filter((el) => {
      return el.id !== id;
    });

    setTask(newTasks);
    toast.info("task deleted",{
      position: "top-left",
      autoClose:2000
    });
  };

  return (
    <>
      <ToastContainer />
      <section>
        <div className="container">
          <div className="card p-3 shadow mt-5">
            <h4 className="text-center text-danger">TO DO APP</h4>
            <input
              type="text"
              className="form-control mx-auto w-50 p-3 mb-3"
              placeholder="Enter task name"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <input
              type="date"
              className="form-control mx-auto w-50 p-3"
              placeholder="Enter task deadline"
              value={deadline}
              onChange={(e) => setDeadline(e.target.value)}
            />
            <button
              className="btn btn-success p-3 mx-auto w-50 mt-3"
              onClick={() => addTask()}
            >
              ADD NEW TASK
            </button>
          </div>
          <table className="table mt-5 table-striped table-bordered p-3 shadow">
            <thead>
              <tr>
                <th>ID</th>
                <th>Task title </th>
                <th>Task dedline</th>
                <th>task remove</th>
              </tr>
            </thead>

            <tbody>
              {task.length > 0 ? (
                task?.map((el, i) => {
                  return (
                    <tr key={el.id}>
                      <td>{i + 1}</td> <td>{el.title}</td>
                      <td>{el.deadline}</td>
                      <td>
                        <button
                          className="btn btn-danger"
                          onClick={() => deleteTask(el.id)}
                        >
                          Remove
                        </button>
                      </td>
                    </tr>
                  );
                })
              ) : (
                <h4 className="text-center text-danger">NOT FOUND !!!</h4>
              )}
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
};

export default index;
