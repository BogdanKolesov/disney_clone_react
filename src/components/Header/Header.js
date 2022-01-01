import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth, provider } from '../../firebase';
import { Link } from 'react-router-dom';
import { headerData } from '../../data/headerData';
import { Nav, Logo, NavMenu, UserImg, LoginContainer, Login } from './Header.styles';
import { selectUserName, selectUserPhoto, setUserLogin, setSignOut } from '../../redux/features/user/userSlice'
import { useSelector, useDispatch } from 'react-redux'

const Header = () => {
    const dispatch = useDispatch()
    const userName = useSelector(selectUserName)
    const userPhoto = useSelector(selectUserPhoto)
    const navigate = useNavigate()

    useEffect(() => {
        auth.onAuthStateChanged(async (user) => {
            if (user) {
                dispatch(setUserLogin({
                    name: user.displayName,
                    email: user.email,
                    photo: user.photoURL
                }))
                navigate('/')
            }
        })
    }, [])

    const signIn = () => {
        auth.signInWithPopup(provider)
            .then((result) => {
                let user = result.user
                dispatch(setUserLogin({
                    name: user.displayName,
                    email: user.email,
                    photo: user.photoURL
                }))
                navigate('/')
            })
    }

    const signOut = () => {
        auth.signOut()
            .then(() => {
                dispatch(setSignOut())
                navigate('/login')
            })
    }

    return (
        <Nav>
            <Logo to='/'>
                <img src='assets/images/logo.svg' alt='Logo' />
            </Logo>
            {
                !userName ?
                    <LoginContainer>
                        <Login onClick={signIn}>Login</Login>
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
                        <UserImg
                            onClick={signOut}
                            src='https://sun9-88.userapi.com/impg/GuwxllhGItnrGieIqWheGO4zEnclzSUNBkezow/iBfdiEziTRE.jpg?size=867x1080&quality=96&sign=5b8702ff398afc97941e0980cddb5d8c&type=album' />
                    </>)
            }
        </Nav >
    );
}

export default Header;
