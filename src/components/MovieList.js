import React from 'react';

const MovieList = (props) => {
    const AddFavourites = props.AddFavourites
    return (
        <>
            {props.movies.map((movie) => 
            <div>
                <div className="movie">
                    <img src={movie.posterUrl} 
                    alt='movie'></img>
                    <div className="movie-title">
                        <p>{movie.title}</p>
                        <div onClick={() => props.clickOnHeart(movie)}>
                        <AddFavourites />
                        </div>
                    </div>
                </div>
            </div>
            )}
        </>
    );
};

export default MovieList;