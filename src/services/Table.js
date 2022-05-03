import React from "react";
function Table(props) {
  let ClickME = (m) => {
    console.log("clicked");
    props.ClickME(m);
  };
  return (
    <table className="table">
      <thead>
        <tr>
          <th>Title</th>
          <th>Genere</th>
          <th>NumberinStock</th>
          <th>DailyRentalRate</th>
          <th>Modification</th>
        </tr>
      </thead>
      <tbody>
        {props.movie.map((m) => {
          return (
            <tr key={m._id}>
              <td>{m.title}</td>
              <td>{m.genre.name}</td>
              <td>{m.numberInStock}</td>
              <td>{m.dailyRentalRate}</td>
              <td>
                <button
                  onClick={() => ClickME(m)}
                  type="button"
                  className="btn btn-danger"
                >
                  Delete
                </button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
export default Table;
