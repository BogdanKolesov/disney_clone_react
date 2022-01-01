import React from 'react';
import { Link } from 'react-router-dom';
import { headerData } from '../../data/headerData';
import { Nav, Logo, NavMenu, UserImg, LoginContainer, Login } from './Header.styles';
import { selectUserName, selectUserPhoto } from '../../redux/features/user/userSlice'
import { useSelector } from 'react-redux'

const Header = () => {
    const userName = useSelector(selectUserName)
    const userPhoto = useSelector(selectUserPhoto)

    return (
        <Nav>
            <Logo to='/'>
                <img src='assets/images/logo.svg' alt='Logo' />
            </Logo>
            {
                !userName ?
                    <LoginContainer>
                        <Login>Login</Login>
                    </LoginContainer>
                    :
                    (<>
                        <NavMenu >
                            {
                                headerData.map((data, index) => (
                                    <Link key={index} to={data.link}>
                                        <img src={data.icon} alt='' />
                                        <span>{data.text}</span>
                                    </Link>
                                ))
                            }
                        </NavMenu>
                        <UserImg src='https://sun9-88.userapi.com/impg/GuwxllhGItnrGieIqWheGO4zEnclzSUNBkezow/iBfdiEziTRE.jpg?size=867x1080&quality=96&sign=5b8702ff398afc97941e0980cddb5d8c&type=album' />
                    </>)
            }

        </Nav >
    );
}

export default Header;
