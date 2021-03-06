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
    display: flex;
    align-items: center;
`
const StyledButton = styled.button`
    border-radius: 4px;
    font-size: 15px;
    display: flex;
    align-items: center;
    height: 56px;
    border: none;
    padding: 0 24px;
    margin-right: 22px;
    letter-spacing: 1.8px;
    cursor: pointer;
    transition: all 110ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;

    span{
        text-transform: uppercase;
    }
`

export const PlayButton = styled(StyledButton)` 
    background: rgb(249, 249, 249);
    &:hover{
        background: rgb( 198, 198, 198);
    }
`

export const TrailerButton = styled(StyledButton)`
    background: rgba(0, 0, 0, 0.3);
    border: 1px solid rgb(249, 249, 249);
    color: rgb(249, 249, 249);

    &:hover{
        background: rgba(249, 249, 249, 0.6);
    }
`

export const AddButton = styled.button`
    margin-right: 16px;
    width: 44px;
    height: 44px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    border: 2px solid #fff;
    background-color: rgba(0, 0, 0, 0.6);
    transition: all 110ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;

    span{
        font-size: 30px;
        color: #fff;
    }
    &:hover{
        scale: 1.15;
    }
`

export const GroupWatchButton = styled(AddButton)`
    background: rgba(0, 0, 0, 0.8);
`

export const SubTitle = styled.p`
    color: rgb(249, 249, 249);
    font-size: 15px;
    min-height: 20px;
    margin-top: 26px;
`
export const Description = styled.p`
    line-height: 1.4;
    font-size: 18px;
    margin-top: 16px;
    max-width: 900px;
    color: rgb(249, 249, 249);
`