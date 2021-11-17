import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
        font-family: Poppins;
        font-style: normal;
        font-weight: 500;
        transition: all .2s;
    }

    div > * {
        margin: 1rem;
    }

    div > div > div > div{
        display: flex;
    }
`