import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.section`
    position: relative;
    height: calc(100vh - 70px);
    display: flex;
    justify-content: center;
    align-items: center;
    
    &:before{
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        content: '';
        background-image: url('/assets/images/login-background.jpg');
        background-position: top;
        background-size: cover;
        background-repeat: no-repeat;
        opacity: 0.7;
        z-index: -1;
    }
`

export const CTA = styled.div`
    max-width: 650px;
    padding: 80px 40px;
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: 100px;

`
export const CTALogoOne = styled.img`

`
export const SignUp = styled(Link)`
    width: 100%;
    background-color: #0063e5;
    font-weight: bold;
    text-transform: uppercase;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 17px 0;
    color: #f9f9f9;
    border-radius: 4px;
    font-size: 18px;
    cursor: pointer;
    transition: all 200ms;
    letter-spacing: 1.5px;
    margin-top: 8px;
    margin-bottom: 12px;

    &:hover{
        background-color: #0483ee;
    }
`

export const Description = styled.p`
    font-size: 11px;
    letter-spacing: 1.5px;
    text-align: center;
    line-height: 1.5;
`

export const CTALogoTwo = styled.img`
    
`