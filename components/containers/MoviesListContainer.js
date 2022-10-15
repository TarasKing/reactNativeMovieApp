import React, { useState, useEffect } from 'react'
import { Container, Select, Box, Center, CheckIcon } from 'native-base'
import FormSearch from '../forms/FormSearch'
import Loading from '../layout/Loading'
import MovieList from '../lists/MovieList'
import { SEARCH_MOVIE_URL } from '../../services/api_config'


const MoviesListContainer = ({ navigation }) => {
  
  const [film, setFilm] = useState(null)
  const [movies, setMovies] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [searchType, setSearchType] = React.useState(SEARCH_MOVIE_URL);
  


  const loadMovies = async (query) => { 
    setIsLoading(true)
    await fetch(`${searchType}${query}`).
      then(response => response.json()).
      then(data => setMovies(data.results))
  }

  
  function fetchMovies () { 
    loadMovies(film)
    setIsLoading(false)
  }
  
  const handleInputChange = film => {
    setFilm(film)
  }


  return (
    <Container px={3} minWidth='100%'>
      <FormSearch fetchMovies={fetchMovies} onInputChange={handleInputChange} setSearchType={setSearchType} searchType={searchType} />

      {isLoading ? <Loading /> : <MovieList movies={movies} navigation={ navigation }/>}
    </Container>
  )
}

export default MoviesListContainer
