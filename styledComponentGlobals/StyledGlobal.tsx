import { createGlobalStyle } from 'styled-components';
import { DefaultTheme } from 'styled-components';

const StyledGlobalStyle = createGlobalStyle<{ theme: DefaultTheme }>`
  * {
    margin: 0;
    padding: 0;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
    outline: none;
    -webkit-user-select: none;
    /* Chrome/Safari */
    -moz-user-select: none;
    /* Firefox */
    -ms-user-select: none;
    /* IE10+ */
  }

  html {
    box-sizing: border-box;
    font-size: 62.5% ;
    scroll-behavior: smooth;
    -webkit-tap-highlight-color: transparent;
  
    @media only screen and (max-width: 1400px) {
      font-size: 56.25%;
    }
  
    @media only screen and (max-width: 900px) {
      font-size: 50%;
    }

    @media only screen and (max-width: 600px) {
      font-size: 45%;
    }
  }

  body {
    font-family: sans-serif;
    font-weight: 400;
    color: ${({ theme }) => theme.text};
    scroll-behavior: smooth;
    background-color: ${({ theme }) => theme.body};
    transition: background-color 0.5s ease-in, color 0.5s ease-in;
    -webkit-font-smoothing: subpixel-antialiasd;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: sans-serif;
    margin: 0;
  }
`;

export default StyledGlobalStyle;
