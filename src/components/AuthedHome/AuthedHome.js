import React from 'react'
import request from '../../utils/_Requests'
import Nav from '../Nav/Nav'
import Banner from './Banner/Banner'
import Category from './Category/Category'

const categories = [
  {
    title: 'NETFLIX ORIGINALS',
    fetchUrl: request.fetchNetflixOriginals,
    isLargeCategory: true
  },
  {
    title: 'Trending Now',
    fetchUrl: request.fetchTrending,
  },
  {
    title: 'Top Rated',
    fetchUrl: request.fetchTopRated,
  },
  {
    title: 'Action Movies',
    fetchUrl: request.fetchActionMovies,
  },
  {
    title: 'Comedy Movies',
    fetchUrl: request.fetchComedyMovies,
  },
  {
    title: 'Horror Movies',
    fetchUrl: request.fetchHorrorMovies,
  },
  {
    title: 'Romance Movies',
    fetchUrl: request.fetchRomanceMovies,
  },
  {
    title: 'Decomentries',
    fetchUrl: request.fetchDecomentaries,
  },
]

const Home = () => {
  return (
    <React.Fragment>
      <Nav />
      <Banner />
      {categories.map((cat, i) => (
        <Category key={i} title={cat.title} fetchUrl={cat.fetchUrl} isLargeCategory={cat.isLargeCategory} />
      ))}
    </React.Fragment>
  )
}

export default Home
