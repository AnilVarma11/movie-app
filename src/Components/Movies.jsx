import React from 'react';
import { useState, useEffect } from 'react';
import MovieCard from './MovieCard';
import '../styles/Movies.css';

const Movies = () => {

    const API_URL = "https://www.omdbapi.com?apikey=2b1e0f96";


    const [searchTerm, setSearchTerm] = useState("");
    const [movies, setMovies] = useState([]);
  
    useEffect(() => {
      searchMovies("Avengers");
    }, []);
  
    const searchMovies = async (title) => {
      const response = await fetch(`${API_URL}&s=${title}`);
      const data = await response.json();
  
      setMovies(data.Search);
    };
  


    return (
        <div>
           <h1 className='title'>SearchX</h1>
      <div className="search">
           <input
           value={searchTerm}
           onChange={(e) => setSearchTerm(e.target.value)}
           placeholder="Search for movies"/>
          <button type='submit' onClick={() => searchMovies(searchTerm)}> Search </button>
  
     </div>

{movies?.length > 0 ? (
  <div className="container">
    {movies.map((movie) => (
        <div>
               <MovieCard movie={movie} />
        </div>
    ))}
  </div>
) : (
  <div className="empty">
    <h2 style={{textAlign: 'center'}}>No movies found</h2>
  </div>
)}
</div>
);

}

export default Movies;
