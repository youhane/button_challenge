import styled from "styled-components";

export const ButtonIcon = styled.button`
    background: hsla(231, 99%, 62%, 1);
    border: none;
    border-radius: 10%;
    font-size: .5rem;
    padding: 0 1rem;
    color: white;
    display: flex;
    box-shadow: 0px 2px 3px 0px hsla(225, 100%, 40%, 0.2);

    span{
        padding: ${props => props.end ? ".9rem 0 .9rem .5rem" : ".9rem .5rem .9rem 0"};
    }

    :hover, :focus{
        filter: brightness(85%);
    }
`