import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import { border4, backgroundElement5, text2, text3, text5, border3, border5, backgroundElement9, lightTheme, darkTheme } from './styles/color';

const GlobalStyle = createGlobalStyle`

  ${reset}

  * {
    box-sizing: border-box;
  }

  body {
    margin-top: 4rem;
    ${lightTheme}
    background: var(--bg-page1);
    color: var(--text1);
    transition: background-color 0.2s;
  }

  @media (prefers-color-scheme: dark) {
    body {
      ${darkTheme}
      background: var(--bg-page1);
      color: var(--text1);
    }
  }

  body[data-theme='light'] {
    ${lightTheme};
  }

  body[data-theme='dark'] {
    ${darkTheme};
  }

  :root {
    --post-border-top: ${props => (props.isDarkMode ? border4 : backgroundElement5)};
    --postlist-navbar-filter-color: ${props => (props.isDarkMode ? text2 : text5)};
    --postlist-navbar-more-btn-color: ${props => (props.isDarkMode ? text3 : backgroundElement9)};
    --postlist-navbar-more-border-top: ${props => (props.isDarkMode ? border3 : border5)};
  }

  a {
    text-decoration: none;
    color: var(--text1);
  }


  input {
    outline: none;
  }
`;

export default GlobalStyle;
