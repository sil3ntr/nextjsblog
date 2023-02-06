import styled from 'styled-components'
import { Lighttheme, Darktheme } from './Theme'
import { poppins } from './Global'


export const HighlightStyled = styled.div`
    //background-color: ${Lighttheme.colors.highLight};
    padding: 40px 0;
    font-family: ${poppins.style.fontFamily}, sans-serif;
    color: ${Lighttheme.colors.font};

    h1 {
        font-size: 4em;
    }
` 
