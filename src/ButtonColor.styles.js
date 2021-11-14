import styled from "styled-components";

export const ButtonColor = styled.button`
    background: ${(props) => props.color};
    color: white;
    border: none;
    border-radius: 10%;
    font-size: .5rem;
    padding: 0 1rem;

    :hover{
        filter: brightness(85%);
    }
`