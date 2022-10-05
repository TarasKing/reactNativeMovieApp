import { useState } from 'react'
import { Container } from 'native-base'
// import { getSearchMovies } from '../../services/api_search'
import FormSearch from '../forms/FormSearch'
import Loading from '../layout/Loading'
import MovieList from '../lists/MovieList'
import object from '../../data/object.js'

const MoviesListContainer = ({navigation}) => {

  const data = object;
  const [film, setFilm] = useState(null)
  const [movies, setMovies] = useState([])
  const [isLoading, setIsLoading] = useState(false)



  const fetchMovies = () => {
  setMovies(data)

    // getSearchMovies(film).then(movies => {
    //   setMovies(movies)
    // })
  }

  const handleInputChange = film => {
    setFilm(film)
  }

  // console.log("filmL:", film)
  // console.log("movies:", movies)

  return (
    <Container px={5}>
        <FormSearch fetchMovies={ fetchMovies } onInputChange={handleInputChange} />
      {isLoading ? <Loading /> : <MovieList movies={movies} navigation={ navigation } />}
    </Container>
  )
}

export default MoviesListContainer
