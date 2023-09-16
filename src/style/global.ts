import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
:root {
    --purple-300: rgba(255,228,225);
    --purple-600: #FFB6C1;
    --purple-900: #00CED1;

    --font-black: #1c1c1c;
    --font-white: #fff;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
//1rem = 16px

    @media(max-width: 1080px) {
        font-sizi: 93.75%; //1rem = 15px
    }
    @media(max-width: 720px) {
        font-size: 87.5%; //1rem = 14px
    }
}
`;