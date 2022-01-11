import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import MovieList from './components/MovieList';
import MovieHeader from './components/MovieHeader';
import AddFavourites from './components/AddFavourites';
import RemoveFavourites from './components/RemoveFavourites';
import NavBar from './components/NavBar';
import { BrowserRouter as Router , Link, Route, Routes } from 'react-router-dom';
import Details from './components/Details';

const App = () => {
  const [movies, setMovies] = useState([]);
  const [favourites, setFavourites] = useState([]);

  const getMovies = async () => {
    const url = "http://localhost:8000/movies"
    const response = await fetch(url);
    const responseJSON = await response.json();
    setMovies(responseJSON)
  };

  useEffect(() => {
    getMovies();
    const movieFavourites = JSON.parse(localStorage.getItem('moviefav')); // when we run the app we don't loose the fav movies, we get them from the local storage
    setFavourites(movieFavourites);
  }, []);

  const saveToLocalStorage = (items) => {
    localStorage.setItem('moviefav', JSON.stringify(items));  // moviefav is the key to store our fav movies 
                                                              // in local storage
  };

  const favouriteMovies = (movie) => {
    var i=0;
    for(var mov of favourites){
      if(mov.id===movie.id){
        i=1;
      }
    }
    //check the favourite list
    if(i==0){
    const newFavouriteList = [...favourites, movie];
    setFavourites(newFavouriteList);
    saveToLocalStorage(newFavouriteList);}
  };

  const removeFavouriteMovies = (movie) => {
    const newFavouriteList = favourites.filter((favourite) => favourite.id !== movie.id);
    setFavourites(newFavouriteList);
    saveToLocalStorage(newFavouriteList);
  };

  

  return (
 
      <div>
        <div className='movie-header'>
          <NavBar logo='POPCORN' fav='Favourites' />
        </div>
        <div className='movie-container'>
          <MovieList movies = {movies} clickOnHeart={favouriteMovies} AddFavourites = {AddFavourites} />
        </div>
        <div className='movie-header'>
          <MovieHeader header='Favourites' />
        </div>
        <div className='movie-container-favourites'>
          <MovieList movies = {favourites} clickOnHeart={removeFavouriteMovies} AddFavourites = {RemoveFavourites} />
        </div>
      </div>

  );
};

export default App;
