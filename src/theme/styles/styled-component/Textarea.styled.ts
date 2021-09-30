import styled from 'styled-components';

export const Textarea = styled.textarea`
    width: 100%;
    border: none;
    outline: none;
    color: #252631;
    font-size: 16px;
    line-height: 21px;
    resize: none;

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
