import React, { useEffect } from 'react';
import { Container, SubTitle, Description, Background, ImageTitle, Controls, PlayButton, TrailerButton, AddButton, GroupWatchButton } from './Detail.styled';
import { useParams } from 'react-router-dom'

const Detail = () => {
    const { id } = useParams()
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
            <SubTitle>
                1990 / 10m / Family, Comedy, Animation
            </SubTitle>
            <Description>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Et quo nemo iste nostrum ex, quis suscipit facere earum nam perspiciatis labore sed ab eveniet amet excepturi aliquam ad saepe dolorem temporibus odio reiciendis, beatae quia. Mollitia ullam molestiae repellendus facilis.
            </Description>
        </Container>
    );
}

export default Detail;
