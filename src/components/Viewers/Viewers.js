import React from 'react';
import { Container, Wrap } from './Viewers.styles';

const Viewers = ({ content }) => {
    return (
        <Container>
            {
                content.map((data, index) => (
                    <Wrap key={index}>
                        <img src={data.image} alt={data.alt} />

                    </Wrap>
                ))
            }
        </Container>
    );
}

export default Viewers;
