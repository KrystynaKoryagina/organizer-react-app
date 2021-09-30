import styled from 'styled-components';

export const Button = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 9px 19px 8px;
    border: none;
    font-size: 14px;
    text-transform: uppercase;
    font-weight: 700;
    background: none;
    color: #fff;
    border-radius: 4px;
    transition: all 0.2s;

    &:hover {
        cursor: pointer;
        transform: scale(1.1);
    }

    &:disabled {
        cursor: initial;
        transform: scale(1);
        filter: grayscale(100%);
        opacity: 0.3;
    }
`;
