import { createGlobalStyle } from 'styled-components';
import RobotoRegular from './fonts/Roboto/Roboto-Regular.ttf'

export const GlobalTheme = createGlobalStyle`
    //FONTS
    @font-face {
        font-family: 'roboto-regular';
        src: local('roboto-regular'), local('roboto-regular'),
        url(${RobotoRegular}) format('ttf'),
    }
    //
    *{
        margin: 0 auto;
        box-sizing: border-box;
        font-family: 'roboto-regular'
    }
    body{
        color: #fff;
    }
    a{
        color: #fff;
        text-decoration: none;
        cursor: pointer;
    }
`