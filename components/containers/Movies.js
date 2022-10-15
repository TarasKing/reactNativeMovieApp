import React, { useState, useEffect } from 'react'
import { Container, Select, CheckIcon } from 'native-base'
import Loading from '../layout/Loading'
import MovieList from '../lists/MovieList'
import { MOVIES_NOW_PLAYING_URL, MOVIES_POPULAR_URL, MOVIES_TOP_RATED_URL, MOVIES_UPCOMING_URL } from '../../services/api_config'

const Movies = ({navigation}) => {

  const [movies, setMovies] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [searchType, setSearchType] = React.useState(MOVIES_TOP_RATED_URL);
  


  const loadMovies = async () => { 
    setIsLoading(true)
    await fetch(`${searchType}`).
      then(response => response.json()).
      then(data => setMovies(data.results))
  }

  useEffect(() => { 
    loadMovies()
    setIsLoading(false)
  }, [searchType])

  

  return (
    <Container px={3} minWidth='100%'>
      <Select selectedValue={searchType} Label="Choose a Type"minWidth="200" accessibilityLabel="Choose Search Type:" _selectedItem={{
            bg: "teal.600",
            endIcon: <CheckIcon size="5" />
             }} mt={1} onValueChange={itemValue => setSearchType(itemValue)}>
                  <Select.Item label="top rated" value={MOVIES_TOP_RATED_URL} />
                  <Select.Item label="now playing" value={MOVIES_NOW_PLAYING_URL} />
                  <Select.Item label="popular" value={MOVIES_POPULAR_URL} />
                  <Select.Item label="upcoming" value={MOVIES_UPCOMING_URL} />
                </Select>
      {isLoading ? <Loading /> : <MovieList movies={movies} navigation={ navigation }/>}
    </Container>
  )
}

export default Movies