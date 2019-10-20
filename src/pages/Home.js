import React from 'react'
import CarouselMovies from '../components/CarouselMovies'
import NavBar from '../components/NavBar'

const Home = ({moviesGenre, dataMovies, getMoreMovies}) => (
    <div className='bg-dark'>
        <NavBar/>
        {moviesGenre.map( (movieGenre, index) =>(
            <CarouselMovies
            key = {index}
            genre = {movieGenre}
            movies = {dataMovies[movieGenre] || []}
            moviesWidth = {230}
            selectedList = {false}
            getMoreMovies = {getMoreMovies}
            />
        ))}
    </div>
)

export default Home