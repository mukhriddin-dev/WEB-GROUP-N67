import React, { useState, useRef } from "react";
import Card from "../../UI/Card";
import "./style.scss";
import { user } from "./data";
import { v4 as uuidv4 } from 'uuid';

const index = () => {
  const [task, setTask] = useState([
    { id: 1, title: "lorem ipsum dolor...", deadline: "2022-12-11" },
  ]);


  const [title,setTitle]=useState("");
  const [deadline,setDeadline]=useState('');



const addTask=()=>{
   const newTask={
      id:uuidv4(),
      title: title,
      deadline: deadline
   }

console.log(newTask);

}




  return (
    <>
      <section>
        <div className="container">
          <div className="card p-3 shadow mt-5">
            <h4 className="text-center text-danger">TO DO APP</h4>
            <input
              type="text"
              className="form-control mx-auto w-50 p-3 mb-3"
              placeholder="Enter task name"
            />
            <input
              type="date"
              className="form-control mx-auto w-50 p-3"
              placeholder="Enter task deadline"
            />
            <button className="btn btn-success p-3 mx-auto w-50 mt-3" onClick={()=>addTask()}>
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
                task.map((el, i) => {
                  return (
                  
                      <tr key={el.id}>
                        <td>{i+1}</td> <td>{el.title}</td>
                        <td>{el.deadline}</td>
                        <td>
                          <button className="btn btn-danger">Remove</button>
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
