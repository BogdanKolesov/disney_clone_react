import React from 'react';
import { headerData } from '../../data/headerData';
import { Nav, Logo, NavMenu } from './Header.styles';

const Header = () => {
    return (
        <Nav>
            <Logo src='assets/images/logo.svg' alt='Logo' />
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

        </Nav>
    );
}

export default Header;
