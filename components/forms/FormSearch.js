import { useState } from 'react'
import { Ionicons } from '@expo/vector-icons'
import { Button, FormControl, HStack, Icon, Input, VStack, Select, Box, Center, CheckIcon } from 'native-base'
import { SEARCH_MOVIE_URL, SEARCH_MULTI_URL, SEARCH_TV_URL } from '../../services/api_config'

const FormSearch = props => {

  const { fetchMovies, onInputChange, searchType, setSearchType } = props
  const [formSearchData, setFormSearchData] = useState({})

  const onSubmit = () => {
    fetchMovies()
  }

  return (
    <VStack space={2} width='100%' py={5}>
      <FormControl isRequired>
        <FormControl.Label>Search Movies / TV Shows Name</FormControl.Label>
        <HStack width='100%' space={2}>
          <Input
            placeholder='enter a title of the movie'
            variant='filled'
            bg='gray.200'
            px={3}
            width='85%'
            onChangeText={value => {
              onInputChange(value)
              setFormSearchData({ ...formSearchData, name: value })
            }}
            InputLeftElement={
              <Icon size={5} ml={2} color='gray.400' as={<Ionicons name='ios-search' />} />
            }
          />
                 
        </HStack>
        <FormControl.Label>Choose search Type</FormControl.Label>
        <HStack space={2} width='100%' py={1}>
            <Center justifyContent='center' alignItems="center" space={4}>
            <Box maxW="300">
                <Select selectedValue={searchType} Label="Choose a Type"minWidth="200" accessibilityLabel="Choose Search Type:" _selectedItem={{
                    bg: "teal.600",
                    endIcon: <CheckIcon size="5" />
                 }} mt={1} onValueChange={itemValue => setSearchType(itemValue)}>
                  <Select.Item label="multi" value={SEARCH_MULTI_URL} />
                  <Select.Item label="Movie" value={SEARCH_MOVIE_URL} />
                  <Select.Item label="TV" value={SEARCH_TV_URL} />
                </Select>
              </Box>
          </Center >
          <Button onPress={onSubmit} startIcon={<Icon as={Ionicons} name='ios-search' />}>
            Search
          </Button>
        </HStack>

      </FormControl>
    </VStack>
  )
}

export default FormSearch
