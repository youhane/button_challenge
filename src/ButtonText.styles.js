import styled from "styled-components";

export const ButtonText = styled.button`
    background-color: transparent;
    border: none;
    border-radius: 10%;
    font-size: .5rem;
    padding: 0 1rem;
    color: hsla(231, 99%, 62%, 1);

    :hover, :focus{
        filter: brightness(85%);
    }
`