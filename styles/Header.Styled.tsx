import styled from 'styled-components'
import { Lighttheme, Darktheme } from '../styles/Theme'
import { poppins } from './Global'


export const StyledHeader = styled.header`
    background-color: ${Darktheme.colors.header};
    padding: 40px 0;
    font-family: ${poppins.style.fontFamily}, sans-serif;
    color: ${Lighttheme.colors.font};
    max-width: 100%;

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
export const HeaderStyledBox = styled.div `
    box-sizing: border-box;
    position: absolute;
    width: 1298px;
    height: 62px;
    left: 72px;
    top: 10px;

    //border-width: 2px 2px 3px 2px;
    //border-style: solid;
    border-color: #01161E;
    //filter: drop-shadow(0px 6px 4px rgba(0, 0, 0, 0.25));
    border-radius: 10px;
    overflow: hidden;

    ::before {
        content: '';
        position:absolute;
        width: 100%;
        height: 100%;
        border: 5px solid #01161E;
        background: #000;
        border-right: none;
        border-bottom: none;
        transition: height 0.5s linear,
                    width 0.5s linear 0.5s;
        //animation: rotate 4s linear 2;
    }

    ::after {
        content: '';
        position:absolute;
        background: ${Darktheme.colors.header};
        inset: 2px;
        border-radius: 8px;
    }

   /*  @keyframes rotate {
        from{
            transform: rotate(0deg)
        }
        to{
            transform: rotate(369deg)
        }
    } */

`