import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Nav = styled.nav`
    height: 70px;
    background-color: #090b13;
    padding: 0 36px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    
`

export const Logo = styled(Link)`
    width: 80px;
    img{
        width: 100%;
    }
`

export const NavMenu = styled.div`
    display: flex;
    align-items: center;
    /* flex: 1; */
    margin-left: 25px;
    padding: 30px 0;
    a{
        display: flex;
        align-items: center;
        padding: 0 12px;
        cursor: pointer;
        img{
            width: 20px;
            margin-right: 0.8px;
        }
        span{
            text-transform: uppercase;
            font-size: 13px;
            letter-spacing: 1.42px;
            position: relative;
            &:after{
                content: '';
                height: 2px;
                background: #fff;
                position: absolute;
                left: 0;
                right: 0;
                bottom: -6px;
                opacity: 0;
                transform-origin: left center;
                transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
                transform: scaleX(0);
            }
        }
        &:hover{
            span:after{
                transform: scaleX(1);
                opacity:1;
            }
        }
    }
`
export const UserImg = styled.img`
    width: 48px;
    height: 48px;
    border-radius: 50%;
    cursor: pointer;
`
export const Login = styled.div`
    cursor: pointer;
    border: 1px solid #f9f9f9;
    border-radius: 5px;
    padding: 8px 16px;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    background-color: rgba(0, 0, 0, 0.6);
    transition: all 0.2s ease 0s;

    &:hover{
        background-color: #f9f9f9;
        color: #000;
        border-color: transparent;
    }
`
export const LoginContainer = styled.div`
    flex: 1;
    display: flex;
    justify-content: flex-end;
`