import axios from 'axios'

export const nasaApi = axios.create({
    baseURL: 'https://api.nasa.gov/planetary/apod?api_key=Jmy59CUOvm86qAxPzglJB9oghGM8VJN9CSIvNtRD',
    timeout: 3000
})