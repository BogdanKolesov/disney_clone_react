import React from 'react';
import { Container } from './Home.styles'
import ImageSlider from '../ImageSlider'
import { imageSliderData } from '../../data/imageSliderData';
import Viewers from '../Viewers';
import { viewersData } from '../../data/viewersData'
import Movies from '../Movies'
import { moviesData } from '../../data/moviesData'

const Home = () => {
    return (
        <Container>
            <ImageSlider content={imageSliderData} />
            <Viewers content={viewersData} />
            <Movies content={moviesData} />
        </Container>
    );
}

export default Home;
