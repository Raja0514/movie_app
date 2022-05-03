import React, { useEffect, useState } from "react";
import axios from "axios";
const Movie2 = () => {
  const [data, setData] = useState([]);
  useEffect(() => { //same as lifecycle methods  compoundDidMount and compoundwillunMount
    axios
      .get("http://localhost:3000/movies")
      .then((result) => setData(result.data));
  }, []);
  function handleDelete(m) {
    console.log("working");
    console.log(m);
    const updatemovies = data.filter((k) => k._id !== m._id);
    console.log(updatemovies);
    setData(updatemovies);
  }
  if (data.length === 0) return <p>No movies in the database</p>;
  return (
   <React.Fragment>
     <h1>Star Cinemas Muscat-Oman</h1>
      <p>Now sowing {data.length} Movies in the database</p>
      <table className="table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Genere</th>
            <th>Number in Stock</th>
            <th>Daily Rental Rate</th>
            <th>Number of Screen</th>
            <th>Modification</th>
          </tr>
        </thead>
        <tbody>
          {data.map((m) => (
            <tr key={m._id}>
              <td>{m.title}</td>
              <td>{m.genre.name}</td>
              <td>{m.numberInStock}</td>
              <td>{m.dailyRentalRate}</td>
              <td>{m.NumberofScreen}</td>
              <td>
                <button className="btn btn-danger" onClick={() => handleDelete(m)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </React.Fragment>
  );
};
export default Movie2;
