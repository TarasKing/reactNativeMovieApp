// import React from 'react'
import { useState, useEffect } from 'react'
// import axios from 'axios'
// import qs from 'qs'
import { BASE_URL, APP_KEY } from './api_config'
import object from './api_movie_id'

export const getMovieById = async id => {
    const url = `${BASE_URL}/movie/${id}?api_key=${APP_KEY}`

// https://api.themoviedb.org/3/movie/634649?api_key=70a470f4c6d37723d1440e46f2c0a67f

    // const [isLoading, setLoading] = useState(false);
    const data = object;
    const [movieById, setMovieById] = useState([]);
   
    setMovieById(data.id)

    // getMovie = () => {
    //     fetch(url)
    //       .then((response) => response.json())
    //       .then((json) => setMovieById(json))
    //       .catch((error) => console.error(error))
    //     //   .finally(() => setLoading(false));
    // }
    // useEffect(() => {
    //     // setLoading(true);
    //     getMovie();
    // }, []);


    const getMoviesFromApiAsync = async () => {
  try {
    const response = await fetch(url);
    const json = await response.json();
    return console.log(json.movies);
  } catch (error) {
    console.error(error);
  }
};


    return movieById

}