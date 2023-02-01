import styled from "styled-components";
import { Darktheme, Lighttheme } from "./Theme";

export const ContainerStyle = styled.div `
    width: 1000px;
    max-width: 100%;
    padding: 0 10px;
    margin: 0 auto;

    & ul {
        list-style-type: none; 
    }

    & a:link, a:visited, a:active {
        text-decoration: none;
        color: ${Darktheme.colors.font};
    }
`

