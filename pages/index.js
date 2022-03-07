import React, { useState } from 'react'
import Head from 'next/head'
import SideMenu from '../components/sideMenu'
import CarouselSlide from '../components/carousel'
import MovieList from '../components/movieList'
import { getMovies, getCategories } from '../actions'


const Home = (props) => {

  const {movies, categories, images} = props
  const [filter, setFilter] = useState('all')


  const changeCategory = category => {
    setFilter(category)
  }

  const filterMovies = movies => {
    if (filter === 'all') {
      return movies
    }
    
    return movies.filter(movie => {
      return movie.genre && movie.genre.includes(filter)
    })
  }
  
  return (
  <div>
   <div className='home-page'>
    <div className="container">
      <div className="row">
        <div className="col-lg-3">
        <SideMenu
          activeCategory={filter}
          changeCategory={changeCategory} 
          categories={categories} />
        </div>

        <div className="col-lg-9">
          <CarouselSlide images={images} />
          <h1>Displaying {filter} movies</h1>
          <div className="row">
            <MovieList movies={filterMovies(movies) || []} />
          </div>
        </div>
      </div>
    </div>
  </div>
  </div>
)
  }

Home.getInitialProps = async ({ req }) => {
  const categories = await getCategories()
  const movies = await getMovies()
  const images = movies.map(movie =>{
    return {
      id: `image-${movie.id}`,
      url: movie.image,
      title: movie.name
    }
  })

  return {
    movies,
    categories,
    images
  }
}

export default Home