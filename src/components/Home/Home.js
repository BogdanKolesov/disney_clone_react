import React from 'react';
import { Container } from './Home.styles'
import ImageSlider from '../ImageSlider'
import { imageSliderData } from '../../data/imageSliderData';
import Viewers from '../Viewers';
import { viewersData } from '../../data/viewersData'

const Home = () => {
    return (
        <Container>
            <ImageSlider content={imageSliderData} />
            <Viewers content={viewersData} />
        </Container>
    );
}

export default Home;
