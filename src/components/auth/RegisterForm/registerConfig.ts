/* eslint-disable no-template-curly-in-string */
import * as yup from 'yup';

import { IRegisterUser } from '../../../types';

const tooShortMessage = 'Минимальная длина — ${min} символов';
const tooLongMessage = 'Максимальная длина — ${max} символов';

export const registerSchema: yup.SchemaOf<IRegisterUser> = yup.object().shape({
    name: yup
        .string()
        .min(2, tooShortMessage)
        .max(30, tooLongMessage)
        .required(),
    email:    yup.string().email('Почта должна быть настоящей').required('Поле email обязательно для заполнения'),
    password: yup
        .string()
        .min(8, tooShortMessage)
        .max(64, tooLongMessage)
        .required(),
    confirmPassword: yup
        .string()
        .oneOf([yup.ref('password')], 'Пароли должны совпадать')
        .required('Поле confirmPassword обязательно для заполнения'),
});
