import styled from 'styled-components'
import { Lighttheme, Darktheme } from '../styles/Theme'


export const StyledHeader = styled.header`
    background-color: ${Darktheme.colors.header};
    padding: 40px 0;
    font-family: 'Poppins' sans-serif;
    color: ${Darktheme.colors.font};

    ul {
        list-style-type: none;
    }

` 
export const NavStyle = styled.nav `
    display: flex;
    align-items: center;
    justify-content: end;
    margin-bottom: 40px;
    margin-right: 30px;

    & ul:hover {
        opacity: 0.9;
        transform: scale(1.10);
    }

`
export const Logo = styled.img`
    width: 80px
`
