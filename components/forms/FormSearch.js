import { useState } from 'react'
import { Ionicons } from '@expo/vector-icons'
import { Button, FormControl, HStack, Icon, Input, VStack } from 'native-base'

const FormSearch = props => {

  const { fetchMovies, onInputChange } = props
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
          <Button onPress={onSubmit} startIcon={<Icon as={Ionicons} name='ios-search' />}>
            Search
          </Button>
        </HStack>
      </FormControl>
    </VStack>
  )
}

export default FormSearch
