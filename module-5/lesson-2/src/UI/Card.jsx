import React from "react";
import "./style.scss";

const Card = (props) => {
  const {
    user: { first_name, last_name, avatar, id, email, online },
  } = props;

  const cardStyle = {
    backgroundColor: 10 > 3 ? "azure" : "black",
    width: "344px",
    margin: "20px",
    color: 10 > 3 ? "black" : "#fff",
  };

  return (
    <>
      <div className="card" style={cardStyle}>
        <img src={avatar} alt="rasm" className="img" />
        <div className="card-body">
          <h2 className="card-sarlavha">
            {first_name} {last_name}
          </h2>
          <p className="card-text">{email}</p>

          <button className={`btn ${online ? "btn-success" : "btn-danger"}`}>{online ? "Online" : "Offline"}</button>
        </div>
      </div>
    </>
  );
};

export default Card;
