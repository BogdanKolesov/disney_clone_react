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
                    <img src='/assets/images/play-icon-black.png' alt='' />
                    <span>Play</span>
                </PlayButton>
                <TrailerButton>
                    <img src='/assets/images/play-icon-white.png' alt='' />
                    <span>Trailer</span>
                </TrailerButton>
                <AddButton>
                    <span>+</span>
                </AddButton>
                <GroupWatchButton>
                    <img src='/assets/images/group-icon.png' alt='' />
                </GroupWatchButton>
            </Controls>
        </Container>
    );
}

export default Detail;
