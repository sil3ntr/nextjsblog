import styled from "styled-components";
import { Darktheme, Lighttheme } from "./Theme";

export const ContainerStyle = styled.div `
    display: flex;
	flex-flow: row nowrap;
    width: 100%;
    align-items: center;
    flex-basis: auto;
    justify-content: center;


    & ul {
        list-style-type: none; 
    }

    & a:link, a:visited, a:active {
        text-decoration: none;
        color: ${Lighttheme.colors.font};
    }
`
export const ContainerRight = styled.div`
    display: flex;
    width: 100%;
    justify-content: flex-end;
`

export const ContainerLeft = styled.div`
    display: flex;
    width: 100%;
    justify-content: flex-start;
`
