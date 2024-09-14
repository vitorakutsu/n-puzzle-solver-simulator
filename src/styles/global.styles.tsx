import { createGlobalStyle } from 'styled-components';
import { color } from './theme/color';

export const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;

        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: antialiased;

        margin:0;
        padding:0;

        position: relative;
    }

    a {
        text-decoration: none;
        color: inherit;
    }

    button {
        cursor: pointer;
    }

    div, span, section, header, footer, main, nav {
        display: flex;
        flex-direction: row;
    }

    p {
        color: ${color.neutral.darkest};
    }
`;
