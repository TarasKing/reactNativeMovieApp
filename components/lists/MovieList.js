import { FlatList } from 'native-base'
import MovieItem from '../listItems/MovieItem'

const MovieList = props => {
  const { navigation, movies } = props

  return (
    <FlatList
      data={movies}
      renderItem={({ item }) => (
        <MovieItem
          id={item.id}
          title={item.original_title}
          poster_path={item.poster_path}
          release_date={item.release_date}
          popularity={item.popularity}
          overview={item.overview}
          navigation={navigation}
        />
      )}
    />
  )
}

export default MovieList
