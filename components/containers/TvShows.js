import React, { useState, useEffect } from 'react'
import { Container, Select, CheckIcon } from 'native-base'
import Loading from '../layout/Loading'
import MovieList from '../lists/MovieList'
import { TV_AIRING_TODAY_URL, TV_ON_THE_AIR_URL, TV_POPULAR_URL, TV_TOP_RATED_URL } from '../../services/api_config'

const TvShows = ({navigation}) => {

  const [movies, setMovies] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [type, setType] = React.useState(TV_AIRING_TODAY_URL);
  


  const loadMovies = async () => { 
    setIsLoading(true)
    await fetch(`${type}`).
      then(response => response.json()).
      then(data => setMovies(data.results))
  }

  useEffect(() => { 
    loadMovies()
    setIsLoading(false)
  }, [type])

  

  return (
    <Container px={3} minWidth='100%' flex='1'>
      <Select justifyContent='center' alignContent='center' selectedValue={type} Label="Choose a Type"minWidth="200" accessibilityLabel="Choose Search Type:" _selectedItem={{
            bg: "teal.600",
            endIcon: <CheckIcon size="5" />
             }} mt={1} onValueChange={itemValue => setType(itemValue)}>
                  <Select.Item label="airing today" value={TV_AIRING_TODAY_URL} />
                  <Select.Item label="on the air" value={TV_ON_THE_AIR_URL} />
                  <Select.Item label="popular" value={TV_POPULAR_URL} />
                  <Select.Item label="upcoming" value={TV_TOP_RATED_URL} />
                </Select>
      {isLoading ? <Loading /> : <MovieList movies={movies} navigation={ navigation }/>}
    </Container>
  )
}


export default TvShows