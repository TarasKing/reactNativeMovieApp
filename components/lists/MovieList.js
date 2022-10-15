import { FlatList } from 'native-base'
import MovieItem from '../listItems/MovieItem'

const MovieList = props => {
  const { navigation, movies } = props

  return (
    <FlatList minWidth='100%'
      data={movies}
      renderItem={({ item }) => (
        <MovieItem minWidth='100%'
          id={item.id}
          title={item.original_title}
          poster_path={item.poster_path}
          release_date={item.release_date}
          popularity={item.popularity}
          overview={item.overview}
          navigation={navigation}
          name={item.name}
          first_air_date={item.first_air_date}
        />
      )}
    />
  )
}

export default MovieList
