import styled from "styled-components";

export const Grid = styled.div`
    display: grid;
    grid-template-columns: 1fr 50%;
    place-items: center;

    @media (max-width: 50em) {
        grid-template-columns: repeat(1, 1fr);
    }
`
