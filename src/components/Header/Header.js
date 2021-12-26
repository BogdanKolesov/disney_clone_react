import React from 'react';
import { headerData } from '../../data/headerData';
import { Nav, Logo, NavMenu, UserImg } from './Header.styles';

const Header = () => {
    return (
        <Nav>
            <Logo to='/'>
                <img src='assets/images/logo.svg' alt='Logo' />
            </Logo>
            <NavMenu >
                {
                    headerData.map((data, index) => (
                        <a key={index} href={data.link}>
                            <img src={data.icon} alt='' />
                            <span>{data.text}</span>
                        </a>
                    ))
                }
            </NavMenu>
            <UserImg src='https://sun9-88.userapi.com/impg/GuwxllhGItnrGieIqWheGO4zEnclzSUNBkezow/iBfdiEziTRE.jpg?size=867x1080&quality=96&sign=5b8702ff398afc97941e0980cddb5d8c&type=album' />
        </Nav>
    );
}

export default Header;
