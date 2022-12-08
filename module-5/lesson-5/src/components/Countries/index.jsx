import React, { useState, useEffect } from "react";
import { API } from "../../api/api";
import Card from "../../UI/Card";
const index = () => {
  console.log(API);

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    API.getAll().then((result) => {
      setData(result.data);
      if (result.data) {
        setLoading(true);
      }
    });
  }, []);

  if (!loading) {
    return <span className="loader"></span>;
  }

  return (
    <>
      <div className="container">
        <div className="row p-3">
          <div className="col-md-6 d-flex justify-content-end">
            <input
              type="text"
              className="form-control w-50 p-3"
              placeholder="enter country name"
            />
          </div>

          <div className="col-md-6 d-flex justify-content-start">
            <select className="form-select w-50  p-3">
              <option selected disabled>
                Filter by Region
              </option>
            </select>
          </div>

          <div className="col-12 mt-4">
            <h3 className="text-center">All countries</h3>
            <div className="wrapper">
              {data.length > 0 ? (
                data.map((el) => {
                  return <Card data={el} />;
                })
              ) : (
                <h4>Not found</h4>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default index;
