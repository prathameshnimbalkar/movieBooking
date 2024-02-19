import React, { useState, useEffect } from "react";
import './MovieDesc.css';
 
 
 
 
const MovieDesc = () => {
    const [movie, setMovieDetails] = useState(null);
 
    useEffect(() => {
        // Fetch movie details from Django backend
        const fetchMovieDetails = async () => {
            try {
const response = await fetch('http://localhost:8000/movie/1');
                if (response.ok) {
                    const movieData = await response.json();
                    setMovieDetails(movieData);
                } else {
                    console.error('Failed to fetch movie details:', response.statusText);
                }
            } catch (error) {
                console.error('Error:', error);
            }
        };
 
        fetchMovieDetails();
    }, []);
 
    return (
        <>
            <div style={{ backgroundColor: '#c0dffc' }}>
                <br />
                <div className="rowz">
                    <div className="cola">
                        <div className="polaroid">
                            {/* {movie && (
<img src={movie.poster} alt={movie.name} style={{ width: '100%', borderRadius: '10px' }} />
                            )} */}
                            <img src='https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/fighter-et00304730-1704191105.jpg' alt="5 Terre" style={{width:'100%', borderRadius:'10px'}}/>
                            <br />
                        </div>
                    </div>
                    <div className="movie-container">
                       
                        {movie && (
                            <div className="movie-details">
                                <h3>Title: {movie.name}</h3>
                                <h4>Duration: {movie.runtime}</h4>
                                <h4>Release date: {movie.release}</h4>
                                <h4>Description: {movie.desc}</h4>
                                <h4>Language: {movie.lang}</h4>
                                <h4>Genre: {movie.genre}</h4><br></br>
                                <button type="button" class="btn btn-outline-dark">Book Ticket</button><br></br>
                            </div>
                        )}
                    
                    <br>
                    </br>
                    
                    
 
                    </div>
                   
                </div>
                <br></br>
                <br></br>
            </div>
        </>
    );
};
 
export default MovieDesc;
  /*return (
    <>
    <div style={{ backgroundColor: '#c0dffc' }}>
        <br/>
   <div class="rowz">
    <div class="cola">
    <div class="polaroid">
      <img src='https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/fighter-et00304730-1704191105.jpg' alt="5 Terre" style={{width:'100%', borderRadius:'10px'}}/>
      <br/>
    </div>
    </div>
    <div class="col">
        <div className="col" id="title">
          <h3>Movie Title</h3>
        </div>
        <div className="col">
          <h4>Duration</h4>
        </div>
        <div className="col">
          <h4>Release Date</h4>
        </div>
        <div className="col">
          <h4>Language</h4>
        </div>
        <div className="col">
          <h4>Genre</h4>
        </div>
        <div className="col">
          <p>lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem  </p>
        </div>
        <button type="button" class="btn btn-outline-dark">Book Ticket</button>
       
    </div>
    </div>
    <br/>
  </div>
 
    </>
  );
 
 
}
 
export default MovieDesc;*/