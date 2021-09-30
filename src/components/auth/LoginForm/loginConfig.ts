/* eslint-disable no-template-curly-in-string */
import * as yup from 'yup';

import { ILoginUser } from '../../../types';

const tooShortMessage = 'Минимальная длина — ${min} символов';
const tooLongMessage = 'Максимальная длина — ${max} символов';


export const loginFormSchema: yup.SchemaOf<ILoginUser> = yup.object().shape({
    email:    yup.string().email('Почта должна быть настоящей').required('Поле email обязательно для заполнения'),
    password: yup
        .string()
        .min(8, tooShortMessage)
        .max(64, tooLongMessage)
        .required(),
});
