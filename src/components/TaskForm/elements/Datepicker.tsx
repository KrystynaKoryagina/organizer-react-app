import { FC } from 'react';
import { Control, Controller } from 'react-hook-form';
import DatePicker, { registerLocale } from 'react-datepicker';
import ru from 'date-fns/locale/ru';

import { TaskLabel, TaskDate, ContentItem } from '../TaskForm.styled';
import { ITaskForm } from '../taskFormConfig';

registerLocale('ru', ru);

export interface IDatepickerPropsType {
    control: Control<ITaskForm>;
}

export const Datepicker: FC<IDatepickerPropsType> = ({ control }) => {
    return (
        <ContentItem>
            <TaskLabel>Дедлайн</TaskLabel>
            <TaskDate>

                <Controller
                    control = { control }
                    name = 'deadline'
                    render = { ({ field: { onChange, value } }) => (
                        <DatePicker
                            selected = { value }
                            onChange = { onChange }
                            dateFormat = 'dd MMM yyyy'
                            locale = 'ru' />
                    ) } />
            </TaskDate>
        </ContentItem>
    );
};
