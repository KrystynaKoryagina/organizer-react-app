import styled from 'styled-components';

export const TasksList = styled.div`
    padding: 0 30px;
    max-height: 600px;
    overflow-y: scroll;
`;

export const TaskItem = styled.div`
    display: flex;
    align-items: center;
    position: relative;
    height: 56px;

    &:hover {
        cursor: pointer;
        background-color: #fdfdfd;
    }

    &.selected {
        background-color: #fdfdfd;
    }

    &::before {
        content: "";
        display: block;
        width: 20px;
        height: 20px;
        border-radius: 2px;
        background-color: #e8ecef;
        margin-right: 12px;
    }

    &::after {
        position: absolute;
        bottom: 0;
        content: "";
        width: 100%;
        height: 1px;
        background-color: #e8ecef;
        display: block;
    }

    &.completed {
        &::before {
            content: "\f00c";
            font-family: "Line Awesome Free";
            font-weight: 900;
            color: #fff;
            background-color: #4d7cfe;
            display: flex;
            justify-content: center;
            align-items: center;
        }

        .title {
            color: #778ca2;
        }
    }
`;

export const TaskTitle = styled.span`
    color: #252631;
    font-size: 16px;
    line-height: 1;
    margin-top: 1px;
`;

export const Meta = styled.div`
    position: absolute;
    right: 0;
`;

export const Deadline = styled.span`
    font-size: 14px;
    color: #98A9BC;
    margin-right: 18px;

    &::before {
        content: '\f133';
        font-family: 'Line Awesome Free';
        font-weight: 900;
        margin-right: 6px;
    }
`;
