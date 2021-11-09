import styled from "styled-components";

export const Wrapper = styled.button`
    background-color: transparent;
    border: 2px solid var(--outlineBlue);
    border-radius: 10%;
    font-size: .5rem;
    padding: 0 1rem;
    box-shadow: 0px 2px 3px 0px hsla(0, 0%, 20%, 0.2);
    color: var(--outlineBlue);


    :hover, :focus{
        background-color: var(--hoverBlue);
    }
`