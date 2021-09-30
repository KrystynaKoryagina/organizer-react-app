import styled from 'styled-components';

import { Button, Input } from '../../theme/styles/styled-component';

export const FormWrapper = styled.section`
    width: calc(40% - 45px);
    margin: 0 auto;
`;

export const Form = styled.form`
    background-color: #fff;
    border-radius: 10px;
    padding: 50px 40px;
`;

export const InputWrapper = styled(Input)`
    border-bottom: 1px solid #ececec;
    padding: 10px 0;
    font-size: 20px;
    margin-bottom: 5px;
`;

export const Fieldset = styled.fieldset`
    border: unset;
`;

export const Legend = styled.legend`
    text-align: center;
    font-size: 24px;
    font-family: "Roboto", sans-serif;
    font-weight: 500;
    margin-bottom: 20px;
    color: #778ca2;
`;

export const Text = styled.p`
    margin-top: 40px;
    font-size: 14px;
    color: #98a9bc;
    font-family: "Roboto", sans-serif;
    font-weight: 200;

    a {
        text-decoration: unset;
        color: #4d7cfe;
    }
`;

export const SubmitButton = styled(Button)`
    margin-right: 10px;
    background-color: #4d7cfe;
`;
