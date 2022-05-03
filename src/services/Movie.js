import React, { Component } from "react";
import Table from "./Table";
import axios from "axios";
//import { getMovies } from "./Fakemovie";
//run comment 
//>json-server --watch db.json 
class Movie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
    };
  }
  componentDidMount() {
    // fetch('http://localhost:3004/movies')
    // .then(res=>res.json())
    // .then(res=>console.log(res))
    // .then(data=>this.setState({movies:data}))
 axios.get('http://localhost:3004/movies')
.then(res=>{
      const movies1=res.data
      console.log(movies1)
      this.setState({movies:movies1})
    })
  }
  handleDelete = (m) => {
    const updatemovies = this.state.movies.filter((k) => k._id !== m._id);
    console.log(updatemovies);
    this.setState({
      movies: updatemovies,
    });
  };
  render() {
    if (this.state.movies.length === 0) return <p>No movies in the database</p>;
    console.log("errr");
    return (
      <>
        <p>Showing {this.state.movies.length} Movies in the database</p>
        <Table  ClickME={this.handleDelete} movie={this.state.movies}></Table>
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
            {this.state.movies.map((m) => {
              return (
                <tr key={m._id}>
                  <td>{m.title}</td>
                  <td>{m.genre.name}</td>
                  <td>{m.numberInStock}</td>
                  <td>{m.dailyRentalRate}</td>
                  <td>
                    <button
                      onClick={() => this.handleDelete(m)}
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
      </>
    );
  }
}
export default Movie;
