import styled from "styled-components";
import { Darktheme, Lighttheme } from "./Theme";

export const ExperienceStyled = styled.div `
    .experience-grid {
        display: grid;
        gap: 1.5rem;
        grid-auto-columns: 1fr;
        grid-template-areas:
        'one'
        'two'
        'three'
        'four'
        'five';

        .experience {
            font-size: var(--fs-400);
            padding: 2rem;
            border-radius: 0.5rem;
            box-shadow: 2.5rem 3.75rem 3rem -3rem hsl(var(--clr-secondary-400) / 0.25);
        }
    }
`
