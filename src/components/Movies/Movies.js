import React from 'react';
import { Container, Content, Wrap } from './Movies.styles';

const Movies = ({ content }) => {
    return (
        <>
            {
                content.map((data, index) => (
                    <Container key={index}>
                        <h4>
                            {data.title}
                        </h4>
                        <Content>
                            {
                                data.images.map((image, index) => (
                                    <Wrap key={index}>
                                        <img src={image.src} alt={image.alt} />
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
