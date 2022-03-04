import axios from "axios";

const BASE_URL = "http://localhost:3000";

const movieData = []

const categories = [
  {id: '1', name: 'drama'},
  {id: '2', name: 'action'},
  {id: '3', name: 'adventure'},
  {id: '4', name: 'historical'},
 ]


export const getMovies = () => {
  // return new Promise((resolve, reject) => {
  //   setTimeout(() => {
  //     resolve(movieData)
  //   }, 100)
  // })
  return axios.get(`${BASE_URL}/api/v1/movies`).then(res => res.data)
}

export const createMovie = (movie) => {
  return new Promise((resolve, reject) => {
    movie.id = Math.random().toString(36).substring(2, 7)
    movieData.push(movie)
    setTimeout(() => {
      resolve(movieData)
    }, 50)
  })
}


export const getMovieById = id => {
  return axios.get(`${BASE_URL}/api/v1/movies/${id}`).then(res => res.data)
  // return new Promise((resolve, reject) => {
  //   const movieIndex = movieData.findIndex(movie => movie.id === id)
  //   const movie = movieData[movieIndex]
  //   setTimeout(() => resolve(movie), 100) 
  // })
}

export const getCategories = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(categories), 100)
  })
}