import React, { useEffect } from 'react'
import { Container } from './Home.styles'
import ImageSlider from '../ImageSlider'
import { imageSliderData } from '../../data/imageSliderData'
import Viewers from '../Viewers';
import { viewersData } from '../../data/viewersData'
import Movies from '../Movies'
import { moviesData } from '../../data/moviesData'
import db from '../../firebase'
import { useDispatch } from 'react-redux'
import { setMovies } from '../../redux/features/movie/movieSlice'

const Home = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        db.collection('movies').onSnapshot((snapshot) => {
            let tempMovies = snapshot.docs.map((doc) => {
                return { id: doc.id, ...doc.data() }
            })
            dispatch(setMovies(tempMovies))
        })
    }, [])

    return (
        <Container>
            <ImageSlider content={imageSliderData} />
            <Viewers content={viewersData} />
            <Movies content={moviesData} />
        </Container>
    );
}

export default Home;
