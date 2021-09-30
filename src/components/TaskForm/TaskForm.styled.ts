/* eslint-disable no-extra-parens */
import styled from 'styled-components';

import { Button } from '../../theme/styles/styled-component';

export interface ITaskFormControls {
    submit?: boolean;
}

export const Head = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 53px;
    margin-bottom: 27px;

    &::after {
        position: absolute;
        bottom: 0;
        display: block;
        width: 100%;
        height: 1px;
        content: "";
        background-color: #e8ecef;
    }
`;

export const ContentWrapper = styled.div`
    padding-left: 26px;
    padding-right: 44px;
    max-height: 596px;
    overflow-y: scroll;
`;

export const ContentItem = styled.div`
    margin-bottom: 34px;
`;

export const TaskLabel = styled.label`
    display: block;
    font-size: 22px;
    color: #98A9BC;
    margin-bottom: 14px;
`;

export const TaskDate = styled.span`
    display: flex;
    align-items: center;

    &::before {
        content: "\f133";
        font-family: "Line Awesome Free";
        font-weight: 900;
        font-size: 18px;
        margin-right: 6px;
        color: #778ca2;
    }

    input {
        width: 100%;
        border: none;
        outline: none;
        color: #252631;
        font-size: 16px;
    }
`;

export const FormControls = styled.div`
    display: flex;
`;

export const CompleteTaskButton = styled.button`
    font-size: 12px;
    font-weight: 600;
    text-transform: uppercase;
    color: #778ca2;
    display: flex;
    align-items: center;
    background: none;
    border: none;
    margin-left: 26px;

    &::before {
        content: "\f14a";
        font-family: "Line Awesome Free";
        font-weight: 900;
        font-size: 19px;
        display: block;
        margin-right: 12px;
    }

    &:hover {
        cursor: pointer;
        color: #4d7cfe;
    }

    &:disabled {
        cursor: not-allowed;
        color: #778ca2;
    }

    &.completed {
        color: #4d7cfe;
    }
`;

export const RemoveTaskButton = styled.div`
    border: none;
    background: none;
    outline: none;
    margin-right: 17px;
    transition: all 200ms;

    &::before {
        content: "\f00d";
        font-family: "Line Awesome Free";
        font-weight: 900;
        font-size: 26px;
        display: block;
        color: #fe4d97;
    }

    &:hover {
        cursor: pointer;
        transform: scale(1.1);
    }
`;

export const TaskFormButton = styled(Button).attrs((props) => ({
    submit: props.type === 'submit',
}))`
    margin-right: 10px;
    background-color: ${(props) => (props.submit ? '#4d7cfe' : '#fe4d97')};
`;
