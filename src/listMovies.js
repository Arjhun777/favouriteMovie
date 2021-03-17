import React from 'react';

function ListMovies({ movieList }) {
  return (
    <React.Fragment>
      {movieList.length ?
        <table id="directory-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Ratings</th>
              <th>Duration</th>
            </tr>
          </thead>
          <tbody>
            {movieList.map((movieDetail) => (
              <tr>
                <td>{movieDetail.movieName}</td>
                <td>{movieDetail.ratings}</td>
                <td>{movieDetail.duration}</td>
              </tr>
            ))}
          </tbody>
        </table>
        : <p id="no-result">No Results Found</p>
      }
    </React.Fragment>
  )
}

export default ListMovies;