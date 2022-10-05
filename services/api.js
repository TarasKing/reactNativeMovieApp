import axios from 'axios'
import qs from 'qs'
import {APP_KEY, POPULAR_URL} from './api_config'

export const getMovies = async movie => {
  const url = POPULAR_URL

    
  try {
    const params = {
      movie: movie,
    //   app_key: APP_KEY,
    //   field: ['id', 'poster_path', 'release_date', 'title', 'popularity']
    }

    const recipeAxios = axios.create({
      paramsSerializer: params => qs.stringify(params, { arrayFormat: 'repeat' })
    })

      const response = await recipeAxios.get(url, { params })
    console.log('RESPONSE', response.data.hits)
    const films = response.data.hits

    return films
  } catch (error) {
    throw error
  }
}
