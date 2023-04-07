import React from 'react';
import '../styles/Movies.css';

const MovieCard = ({movie: { imdbID, Year, Poster, Title, Type }}) => {
    return (
        
        <div>
            <div className='card'>
                <div>
                    <p>{Year}</p>
                </div>
                <div className='image-container'>
                    <img src={Poster} alt={Title} />
                </div>
                <div className='movie-content'>
                    <span style={{textTransform: 'capitalize'}}>{Type}</span> <br />
                    <h3>{Title}</h3>
                </div>
            </div>
        </div>
    );
}




export default MovieCard;
