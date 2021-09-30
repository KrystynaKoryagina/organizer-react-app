/* eslint-disable no-template-curly-in-string */
import { lightFormat } from 'date-fns';
import * as yup from 'yup';

export interface ITaskForm {
    title: string;
    description: string;
    tag: string;
    completed: boolean;
    deadline: Date;
}

export const taskSchema = yup.object().shape({
    title: yup
        .string()
        .min(3, 'минимальная длина title — ${min} символов')
        .max(64, 'максимальная длина title — ${max} символов')
        .required(),
    description: yup
        .string()
        .min(3, 'минимальная длина description — ${min} символов')
        .max(64, 'максимальная длина description — ${max} символов')
        .required(),
    tag:       yup.string().required('Выберете тег'),
    completed: yup.boolean(),
    deadline:  yup.date().min(new Date(), `Дедлайн должен быть не раньше, чем  ${lightFormat(new Date(), 'yyyy-MM-dd')}`),
});
