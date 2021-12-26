import styled from 'styled-components';

export const Container = styled.section`
    min-height: calc(100vh - 70px);
    padding: 0 calc(3.5vw + 5px);
    position: relative;
`
export const Background = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
    opacity: 0.8;
    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`

export const ImageTitle = styled.div`
    height: 30vh;
    width: 35vw;
    min-height: 170px;
    min-width: 200px;
    img{
        width: 100%;
        height: 100%;
        object-fit: contain;
    }
`

export const Controls = styled.div`

`
export const PlayButton = styled.div`

`

export const TrailerButton = styled.div`

`

export const AddButton = styled.div`

`

export const GroupWatchButton = styled.div`

`