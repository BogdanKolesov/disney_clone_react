import React from 'react'
import { Container, Content, Wrap } from './Movies.styles'
import { selectMovies } from '../../redux/features/movie/movieSlice'
import { useSelector } from 'react-redux'

const Movies = ({ content }) => {
    const movies = useSelector(selectMovies)


    return (
        <>
            {
                content.map((data, index) => (
                    <Container key={index}>
                        <h4>
                            {data.title}
                        </h4>
                        <Content>
                            {movies &&
                                movies.map((movie, index) => (
                                    <Wrap key={index}>
                                        <img src={movie.image} alt={movie.alt} />
                                    </Wrap>
                                ))
                            }
                        </Content>
                    </Container>
                ))
            }
        </>
    );
}

export default Movies;
