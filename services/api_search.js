// import React from 'react'
import { useState, useEffect } from 'react'
// import axios from 'axios'
// import qs from 'qs'
import {SEARCH_URL} from './api_config'

export const getSearchMovies = async film => {
    const url = SEARCH_URL





    // &query=Spider
    // &page=1  
    
    
    try {

        const params = {
            film: film,
            results: ['id']
        }

        const searchMovieAxios = axios.create({
            paramsSerializer: params => qs.stringify(params, { arrayFormat: 'repeat' })
        })

        const response = await searchMovieAxios.get(`${url}&page=1&query=${film}`
            // , { params }
        )
    
        // const response = await axios.get(`${url}&page=1&query=${film}`).then(res => console.log(res.data.results))

      
        // console.log('RESPONSE:', response)
        // console.log(`${url}&page=1&query=${film}`)
        // setMovies(response)
       
      




        




        return response
    }
    catch (error) {
        throw error
    }

}