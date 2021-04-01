import React, { useState, useEffect } from 'react'
import axios from '../../../utils/axios'
import request from '../../../utils/_Requests'
import classes from './banner.module.scss'

const Banner = () => {
  const [movie, setMovie] = useState([])
  const fetchMovie = async () => {
    const res = await axios.get(request.fetchTrending)
    try {
      return setMovie(
        res.data.results[
          Math.floor(Math.random() * res.data.results.length - 1)
        ]
      )
    } catch (e) {
      console.log(e)
    }
  }

  useEffect(() => {
    fetchMovie()
  }, [])

  const truncate = (string, n) => {
    return string?.length > n ? string.substr(0, n - 1) + ' ...' : string
  }
  
  return (
    <header
      className={classes.banner}
      style={{
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${
          movie && movie.backdrop_path
        }")`,
      }}
    >
      <div className={classes.banner__content}>
        <h1 className={classes.banner__title}>
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <div className={classes.banner__buttons}>
          <button className={classes.banner__button}>Play</button>
          <button className={classes.banner__button}>My List</button>
        </div>
        <p className={classes.banner__description}>
          {truncate(movie.overview, 150)}
        </p>
      </div>
    </header>
  )
}

export default Banner
