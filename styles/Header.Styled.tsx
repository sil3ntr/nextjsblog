import styled from 'styled-components'
import { Lighttheme, Darktheme } from '../styles/Theme'
import { poppins } from './Global'


export const StyledHeader = styled.header`
    background-color: ${Darktheme.colors.header};
    padding: 40px 0;
    font-family: ${poppins.style.fontFamily}, sans-serif;
    color: ${Lighttheme.colors.font};
    max-width: 1200px;

    ul {
        list-style-type: none;
    }

` 
export const NavStyle = styled.nav `
    display: flex;
	flex-flow: row nowrap;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin-bottom: 40px;
    margin-right: 30px;

    & ul:hover {
        opacity: 0.9;
        transform: scale(1.10);
    }

    & ul {
	    align-items: flex-end;
    }


`
export const Logo = styled.div`

   img {
        margin-left: 30px;
        width: 80px;
   }
`
