import React, { useState, useEffect } from 'react';
import { Container, SubTitle, Description, Background, ImageTitle, Controls, PlayButton, TrailerButton, AddButton, GroupWatchButton } from './Detail.styled';
import { Navigate, useParams } from 'react-router-dom'
import db from '../../firebase'
import { useNavigate } from 'react-router-dom';

const Detail = () => {
    const { id } = useParams()
    const [movie, setMovie] = useState()
    const navigate = useNavigate()

    useEffect(() => {
        db.collection("movies")
            .doc(id).get()
            .then((doc) => {
                if (doc.exists) {
                    // save the movie data
                    setMovie(doc.data())
                } else {
                    //redirect to Home page
                    navigate('/')
                }
            })
    }, [id])

    return (
        <Container>
            {movie && (
                <>
                    <Background>
                        <img src={movie.backgroundImage} alt='' />
                    </Background>
                    <ImageTitle>
                        <img src={movie.titleImage} alt='' />
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
                        {movie.subtitle}
                    </SubTitle>
                    <Description>
                        {movie.description}
                    </Description>
                </>
            )}
        </Container>
    );
}

export default Detail;
