import styled from 'styled-components';

export const Nav = styled.nav`
    height: 70px;
    background-color: #090b13;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 36px;
    
`

export const Logo = styled.img`
    width: 80px;
`

export const NavMenu = styled.div`
    display: flex;
    a{
        display: flex;
        align-items: center;
        padding: 0 12px;
        img{
            width: 20px;
        }
        span{
            text-transform: uppercase;
            font-size: 13px;
            letter-spacing: 1.42px;
    }
`