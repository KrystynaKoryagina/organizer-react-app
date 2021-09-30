import styled from 'styled-components';

export interface ITagStyle {
    bg: string;
    color: string;
    formTag?: boolean;
}

export const TagsWrapper = styled.div`
    margin-bottom: 34px;

    span {
        opacity: 0.4;

        &:hover {
            opacity: 1;
            cursor: pointer;
            transform: scale(1.1);
        }
    }
`;

export const TagWrapper = styled.span<ITagStyle>`
    display: inline-flex;
    justify-content: center;
    width: 92px;
    font-size: 14px;
    padding-top: 9px;
    padding-bottom: 8px;
    border-radius: 4px;

    margin-right: 9px;
    margin-top: 5px;
    transition: all 0.2s;

    color: ${(props) => props.color};
    background-color: ${(props) => props.bg};

    &:last-child {
        margin-right: 0;
    }

    &.selected {
        opacity: 1;
    }
`;
