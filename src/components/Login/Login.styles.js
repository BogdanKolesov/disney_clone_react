import styled from 'styled-components';

export const Container = styled.section`
    position: relative;
    height: calc(100vh - 70px);
    &:before{
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        content: '';
        background-image: url('/assets/images/login-background.jpg');
    }
`

