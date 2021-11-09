import styled from "styled-components";

export const Wrapper = styled.button`
    background-color: var(--defaultGrey);
    border: none;
    border-radius: 10%;
    font-size: .5rem;
    padding: 0 1rem;
    box-shadow: 0px 2px 3px 0px hsla(0, 0%, 20%, 0.2);


    :hover, :focus{
        background-color: var(--hoverGrey);
    }
`