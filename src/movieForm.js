import React from 'react';

function MovieForm({ handleSubmit, handleInput, formDetails }) {
  return (
    <React.Fragment>
      <p for="name-input">Movie Name</p>
      <input id="name-input" name="movieName" onChange={handleInput} value={formDetails.movieName}/>
      <p for="ratings-input">Ratings</p>
      <input id="ratings-input" name="ratings" onChange={handleInput} value={formDetails.ratings}/>
      <p for="duration-input">Duration</p>
      <input id="duration-input" name="duration" onChange={handleInput} value={formDetails.duration}/>
      <button id="submit-button" onClick={handleSubmit}>submit</button>
    </React.Fragment>
  )
}

export default MovieForm;