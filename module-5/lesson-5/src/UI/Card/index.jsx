import React from "react";
import { Link } from "react-router-dom";
const index = ({ data: { flag, population, capital, region, name } }) => {
  console.log(flag);
  return (
    <>
      <Link to={`/countries/${name}`}>
        <div className="card">
          <img src={flag} alt={name} className="card-img" />
          <div className="card-body">
            <h4 className="card-title">{name}</h4>
            <ul>
              <li>
                Population: <strong>{population}</strong>{" "}
              </li>
              <li>
                Region: <strong>{region}</strong>{" "}
              </li>
              <li>
                Capital: <strong>{capital}</strong>
              </li>
            </ul>
          </div>
        </div>
      </Link>
    </>
  );
};

export default index;
