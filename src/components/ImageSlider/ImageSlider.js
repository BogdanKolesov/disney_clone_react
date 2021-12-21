import React from 'react';
import { Carousel, Wrap } from './ImageSlider.styles';


const Imageslider = ({ content }) => {
    let settings = {
        dots: true,
        infinity: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScrolld: 1,
        autoplay: true
    }
    return (
        <Carousel {...settings}>
            {
                content.map((data, index) => (
                    <Wrap key={index}>
                        <img src={data.image} alt={data.alt} />
                    </Wrap>
                ))
            }
        </Carousel>
    );
}

export default Imageslider;
