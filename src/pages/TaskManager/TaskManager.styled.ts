import styled from 'styled-components';

export const Controls = styled.div`
    display: flex;
    justify-content: flex-end;
    padding-right: 37px;
`;

export const Wrap = styled.div`
    display: flex;
    min-height: 650px;
`;

export const TaskFormWrapper = styled.div`
    margin-top: 30px;
    width: calc(50% - 45px);
    max-height: 600px;
    margin-right: 30px;
    flex-shrink: 0;
    background-color: #fff;
    padding-bottom: 50px;
`;

export const CreateTaskButton = styled.button`
    background: none;
    border: none;
    color: #4d7cfe;
    font-weight: 600;
    text-transform: uppercase;
    display: flex;
    align-items: center;
    transition: all 200ms;

    &::before {
        content: "\f055";
        font-family: "Line Awesome Free";
        font-weight: 900;
        margin-right: 7px;
        font-size: 18px;
    }

    &:hover {
        transform: scale(1.1);
        cursor: pointer;
    }
`;
