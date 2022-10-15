import { Box, Button, Center, Divider, Heading, HStack, Image, Text, VStack } from 'native-base'


const MovieItem = props => {
    const { id, title, poster_path, release_date, popularity, overview, navigation, name, first_air_date} = props
  
  const headerTitle = title ? title : name
  const release = release_date ? release_date : first_air_date
  return (
    <Box px={1} minWidth='95%' >
        <HStack space={1} py={2} >
            <Box minWidth='30%'>
                <Image alt={headerTitle} source={{ uri: `https://image.tmdb.org/t/p/w500${poster_path}` }} size='100' />
            </Box>
              <Box space={1} minWidth='85%'>
                  <VStack minWidth='85%'>
                      <Heading fontSize={12} maxWidth='60%'>{headerTitle}</Heading>
                      <Text fontSize={12}>Popularity: {popularity}</Text>
                      <Text fontSize={12}>Release Date: {release}</Text> 
                      {/* <Box fontSize={10}> */}
            <Button maxWidth='60%'
                          onPress={() => {
                              navigation.navigate('Details', {
                                  id: id,
                                  title: headerTitle,
                                  poster_path: poster_path,
                                  release_date: release,
                                  popularity: popularity,
                                  overview: overview
                              })

                          }}
                            >
                                More Details
                            </Button>
                     
                  </VStack>
            </Box> 
        </HStack>

    </Box>
  )
}
export default MovieItem
