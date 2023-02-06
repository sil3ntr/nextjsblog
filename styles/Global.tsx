import { createGlobalStyle } from 'styled-components';
import { Lighttheme, Darktheme } from './Theme';
import { Inconsolata, Poppins } from '@next/font/google';

export const inconsolata = Inconsolata({ subsets: ['latin'],
                    display: "fallback" })

export const poppins = Poppins({ subsets: ['latin'],
                    weight: ["400","500"] })

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    background: ${Darktheme.colors.body};
    font-size: 1.15em;
    font-family: ${poppins.style.fontFamily}, sans-serif;
    color: ${Lighttheme.colors.font};
    margin: 0;
  }


  p {
    opacity: 0.6;
    line-height: 1.5;
  }
  img {
    max-width: 100%;
}
`

