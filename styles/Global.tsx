import { createGlobalStyle } from 'styled-components';
import { Lighttheme, Darktheme } from './Theme';

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Inconsolata:wght@400;500;600;700&family=Marcellus&family=Poppins:ital,wght@1,500&family=Quicksand&display=optional');
  
  * {
    box-sizing: border-box;
  }

  body {
    background: ${Darktheme.colors.body};
    font-size: 1.15em;
    font-family: 'Poppins', sans-serif;
    color: ${Darktheme.colors.font};
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

export default GlobalStyle