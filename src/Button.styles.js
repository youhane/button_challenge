import styled from "styled-components";

export const ButtonDefault = styled.button`
    background-color: hsla(0, 0%, 88%, 1);
    border: none;
    border-radius: 10%;
    box-shadow: 0px 2px 3px 0px hsla(0, 0%, 20%, 0.2);
    font-size: .5rem;
    padding: 0 1rem;
    color: hsla(0, 0%, 25%, 1);

    :hover, :focus{
        background-color: hsla(0, 0%, 68%, 1);
    }
`