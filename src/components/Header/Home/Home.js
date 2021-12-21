import React from 'react';
import { Container } from './Home.styles'
import ImageSlider from '../../ImageSlider'
import { imageSliderData } from '../../../data/imageSliderData';

const Home = () => {
    return (
        <Container>
            <ImageSlider content={imageSliderData} />
        </Container>
    );
}

export default Home;
