import { Box, Button, Center, Divider, Heading, HStack, Image, Text, VStack } from 'native-base'


const MovieItem = props => {
    const { id, title, poster_path, release_date, popularity, overview, navigation} = props

  return (
    <Box px={1} >
        <HStack space={1} py={1} >
            <Box>
                <Image alt={title} source={{ uri: `https://image.tmdb.org/t/p/w500${poster_path}` }} size='100' />
            </Box>
              <Box space={1}>
                  <VStack minWidth={100}>
                      <Heading fontSize={12}>{title}</Heading>
                      <Text fontSize={12}>Popularity: {popularity}</Text>
                      <Text fontSize={12}>Release Date: {release_date}</Text> 
                      {/* <Box fontSize={10}> */}
                      <Button minWidth={100}
                          onPress={() => {
                              navigation.navigate('Details', {
                                  id: id,
                                  title: title,
                                  poster_path: poster_path,
                                  release_date: release_date,
                                  popularity: popularity,
                                  overview: overview
                              })

                          }}
                            >
                                More Details
                            </Button>
                      {/* </Box> */}
                  </VStack>
            </Box> 
        </HStack>
{/*           
          
          <VStack space={4} divider={<Divider />}>
        <Center>
          
          <Text>{overview}</Text>
        </Center>

        <Box>
                 
        </Box> */}
       
      {/* </VStack> */}
    </Box>
  )
}
export default MovieItem
