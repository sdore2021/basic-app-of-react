import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";

class Movies extends Component {
  state = {
    movies: getMovies()
  };

  handleDeleted = movie => {
    const movies = this.state.movies.filter(m => m._id !== movie._id);
    this.setState({ movies });
  };
  render() {
    if (this.state.movies.length === 0)
      return <p>No element in the database</p>;
    return (
      <table className="table">
        <thead>
          <tr>
            <th>showing {this.state.movies.length} movies in the database</th>
          </tr>
          <tr>
            <th>Title</th>
            <th>Genre</th>
            <th>Stock</th>
            <th>Rate</th>
          </tr>
        </thead>
        <tbody>
          {this.state.movies.map(movie => (
            <tr key={movie._id}>
              <th>{movie.title}</th>
              <th>{movie.genre.name}</th>
              <th>{movie.numberInStock}</th>
              <th>{movie.dailyRentalRate}</th>
              <th>
                <button
                  onClick={() => this.handleDeleted(movie)}
                  className="btn btn-danger btn-sm"
                >
                  deleted
                </button>
              </th>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}
export default Movies;
