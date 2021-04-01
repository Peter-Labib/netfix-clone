import React, { useState, useEffect } from 'react'
import axios from '../../../utils/axios'
import classes from './category.module.scss'

const Category = (props) => {
  const { title, fetchUrl, isLargeCategory = false } = props
  const [movies, setMovies] = useState([])

  useEffect(() => {
    const fetchMovies = async () => {
      const res = await axios.get(fetchUrl)
      try {
        setMovies(res.data.results)
      } catch (e) {
        console.log(e)
      }
    }
    fetchMovies()
  }, [fetchUrl])
  
  return (
    <section className={classes.category}>
      <h2>{title}</h2>
      <div className={classes.category__posters}>
        {movies.map(
          (movie, i) =>
          ((isLargeCategory && movie.poster_path) ||
            (!isLargeCategory && movie.backdrop_path)) && (
              <img
                key={i}
                className={`${classes.category__poster} ${
                  isLargeCategory && classes.category__poster_large
                }`}
                src={`https://image.tmdb.org/t/p/original/${
                  isLargeCategory ? movie.poster_path : movie.backdrop_path
                }`}
                alt={movie.name}
              />
            )
        )}
      </div>
    </section>
  )
}

export default Category
