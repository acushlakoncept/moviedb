import React from 'react'
import Head from 'next/head'
import SideMenu from '../components/sideMenu'
import CarouselSlide from '../components/carousel'
import MovieList from '../components/movieList'
import { getMovies, getCategories } from '../actions'


const Home = (props) => {

  const {movies, categories, images} = props
  
  return (
  <div>
   <div className='home-page'>
    <div className="container">
      <div className="row">
        <div className="col-lg-3">
        <SideMenu categories={categories} />
        </div>

        <div className="col-lg-9">
          <CarouselSlide images={images} />
          <div className="row">
            <MovieList movies={movies || []} />
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