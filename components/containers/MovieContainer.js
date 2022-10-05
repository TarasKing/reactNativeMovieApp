import { useState, useEffect } from "react"
import { Box, Center, HStack, Image, Text, VStack } from "native-base"
// import { getMovieById } from "../../services/api_movie_id" 

const MovieContainer = ({ navigation, route }) => {
    const { id, title, poster_path, release_date, overview, popularity } = route.params
                                  
    // const [movie, setMovie] = useState(null)

    // setMovie(getMovieById(id))
    // console.log("movie:", movie)

    return (
        <Box width='100%'>
            <VStack>
                <Center >
                    <Text width='100%' px={10} py={5} fontSize={20} fontWeight='bold'>{title}</Text>
                    <Box>
                        <Image alt={title} source={{ uri: `https://image.tmdb.org/t/p/w500${poster_path}` }} size="250" />
                    </Box>
                    <Text width='100%' px={10} py={5}>{overview}</Text>
                    <HStack width='100%' px={10} py={5} justifyContent='space-between'>
                        <Text>Release date: {release_date} | </Text>
                        <Text>Popularity: {popularity}</Text>
                    </HStack>

                </Center>

            </VStack>
        </Box>
)
}

export default MovieContainer