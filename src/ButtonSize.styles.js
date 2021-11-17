import styled from "styled-components";

export const ButtonSize = styled.button`
    background: hsla(231, 99%, 62%, 1);
    border: none;
    border-radius: 10%;
    font-size: .5rem;
    color: white;
    display: flex;
    box-shadow: 0px 2px 3px 0px hsla(225, 100%, 40%, 0.2);
    padding:  ${({ size }) =>
        size === 'sm' ? '.7rem .7rem' : '1rem' ||
            size === 'lg' ? '.7rem 1.5rem' : '1rem'
    };

:hover, :focus{
        filter: brightness(85%);
    }
`