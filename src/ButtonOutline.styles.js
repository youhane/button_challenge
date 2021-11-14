import styled from "styled-components";

export const ButtonOutline = styled.button`
    background-color: transparent;
    border: 1px solid hsla(231, 99%, 62%, 1);
    border-radius: 10%;
    font-size: .5rem;
    padding: 0 1rem;
    color: hsla(231, 99%, 62%, 1);


    :hover, :focus{
        filter: brightness(85%);
    }
`