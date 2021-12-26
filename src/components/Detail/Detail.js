import React from 'react';
import { Container, Background, ImageTitle, Controls, PlayButton, TrailerButton, AddButton, GroupWatchButton } from './Detail.styled';

const Detail = () => {
    return (
        <Container>
            <Background>
                <img src='https://cdn.pixabay.com/photo/2016/01/14/20/27/fan-art-1140718_1280.png' alt='' />
            </Background>
            <ImageTitle>
                <img src='https://cdn.pixabay.com/photo/2021/05/03/14/30/simpsons-6226380_1280.png' alt='' />
            </ImageTitle>
            <Controls>
                <PlayButton>

                </PlayButton>
                <TrailerButton>

                </TrailerButton>
                <AddButton>

                </AddButton>
                <GroupWatchButton>

                </GroupWatchButton>
            </Controls>
        </Container>
    );
}

export default Detail;
