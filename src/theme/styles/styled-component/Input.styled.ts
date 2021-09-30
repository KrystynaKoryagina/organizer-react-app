import styled from 'styled-components';

export const Input = styled.input`
    width: 100%;
    border: none;
    outline: none;
    color: #252631;
    font-size: 16px;

    &::-webkit-input-placeholder {
        color: #98a9bc;
    }

    &:-ms-input-placeholder {
        color: #98a9bc;
    }

    &::placeholder {
        color: #98a9bc;
    }

    &:active,
    &:focus {
        outline: unset;
    }
`;
