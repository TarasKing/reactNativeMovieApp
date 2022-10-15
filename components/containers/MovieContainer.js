import React, { useState, useEffect } from 'react'
import { Box, Center, HStack, Image, Text, VStack } from "native-base"


const MovieContainer = ({ navigation, route }) => {
    const { id, title, poster_path, release_date, overview, popularity
    } = route.params
         
// const [isLoading, setIsLoading] = useState(false)
//   const [movie, setMovie] = useState("")
//   const { id,
//     // title, poster_path, release_date, popularity, overview, navigation, name, first_air_date
//   } = route.params
  
//     const loadTheMovie = async () => { 
//     setIsLoading(true)
//     await fetch(`${SEARCH_BY_ID_URL}+${id}`).
//       then(response => response.json()).
//       then(data => setMovie(data.results))
//   }
  
//   useEffect(() => {
//     loadTheMovie()
//     setIsLoading(false)
//     console.log("+++++++++++++++++++++++++MOVIE IS",movie)
//   }, [movie])



    return (
        <Box minWidth='90%' py={3} key={id}>
            <VStack >
                <Center >
                    <Text width='100%' px={10} py={5} fontSize={20} fontWeight='bold'>{title}</Text>
                    <Box>
                        <Image alt={title} source={{ uri: `https://image.tmdb.org/t/p/w500${poster_path}` }} size="250" />
                    </Box>
                    <Text width='90%' px={10} py={5}>{overview}</Text>
                    <HStack Minwidth='100%' px={10} py={5} justifyContent='space-between'>
                        <Text width='70%'>Release date: {release_date} | </Text>
                        <Text>Popularity: {popularity}</Text>
                    </HStack>

                </Center>

            </VStack>
        </Box>
)
}

export default MovieContainer