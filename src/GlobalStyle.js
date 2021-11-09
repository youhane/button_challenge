import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root{
        --defaultGrey: hsla(0, 0%, 88%, 1);
        --hoverGrey: hsla(0, 0%, 68%, 1);
        --outlineBlue: hsla(231, 99%, 62%, 1);
        --hoverBlue: hsla(224, 100%, 58%, 0.1);
        --defaultBlue: hsla(231, 99%, 62%, 1);
        --white: #FFFFFF;
    }

    *{
        font-family: Poppins;
        font-style: normal;
        font-weight: 500;
    }
`