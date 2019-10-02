import React from 'react'
import ListMovies from '../components/ListMovies'
import NavBar from '../components/NavBar'

const Home = ({moviesGenre, dataMovies}) => (
    <React.Fragment>
        <NavBar/>
        {moviesGenre.map( (movieGenre) =>(
            <ListMovies 
            genre = {movieGenre}
            movies = {dataMovies[movieGenre] || []}
            />
        ))}
    </React.Fragment>
)

export default Home