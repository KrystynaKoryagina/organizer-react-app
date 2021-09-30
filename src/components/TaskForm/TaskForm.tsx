import { FC, useEffect, MouseEvent } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { Tags } from '../Tags';
import { Errors } from '../Errors';
import {
    TaskInput, TaskTextarea, Datepicker,
} from './elements';

import {
    ContentWrapper,
    FormControls,
    TaskFormButton,
} from './TaskForm.styled';
import { ITaskForm, taskSchema } from './taskFormConfig';
import {
    useCreateTask, useDeleteTask, useTasks, useUpdateTask,
} from '../../hooks';
import { TaskControl } from './TaskControl';

export const TaskForm: FC = () => {
    const { selectedTask } = useTasks();
    const createTask = useCreateTask();
    const deleteTask = useDeleteTask();
    const updateTask = useUpdateTask();

    const {
        register,
        handleSubmit,
        reset,
        setValue,
        getValues,
        clearErrors,
        control,
        formState: { isDirty, errors },
    } = useForm<ITaskForm>({
        mode:          'onTouched',
        resolver:      yupResolver(taskSchema),
        defaultValues: {
            title:       '',
            description: '',
            tag:         '',
            completed:   false,
            deadline:    new Date(),
        },
    });

    const setFormValues = () => {
        setValue('title', selectedTask?.title);
        setValue('deadline', new Date(selectedTask?.deadline));
        setValue('description', selectedTask?.description);
        setValue('tag', selectedTask?.tag.id);
        setValue('completed', selectedTask?.completed);
    };

    useEffect(() => {
        if (selectedTask) {
            clearErrors();
            setFormValues();
        } else {
            reset();
        }
    }, [selectedTask]);

    const createNewTask = async (newTask: ITaskForm) => {
        await createTask.mutateAsync({
            ...newTask,
            deadline: newTask.deadline.toISOString(),
        });
    };

    const updateSelectedTask = async (task: ITaskForm) => {
        await updateTask.mutateAsync({
            ...task,
            deadline: task.deadline.toISOString(),
        });
    };

    const deleteSelectedTask = async () => {
        await deleteTask.mutateAsync(selectedTask?.id);

        reset();
    };

    const completeSelectedTask = async (event: MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();

        setValue('completed', !selectedTask?.completed);
        await updateSelectedTask(getValues());

        reset();
    };

    const submit = handleSubmit(async (newTask: ITaskForm) => {
        if (selectedTask) {
            await updateSelectedTask(newTask);
        } else {
            await createNewTask(newTask);
        }

        reset();
    });

    const resetForm = (event: MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        reset();

        if (selectedTask) {
            setFormValues();
        }
    };

    const setTagValue = (id: string) => {
        setValue('tag', id, { shouldDirty: true, shouldValidate: true });
    };

    return (
        <form onSubmit = { submit }>
            <TaskControl
                selectedTask = { selectedTask }
                handleTaskDelete = { deleteSelectedTask }
                handleTaskComplete = { (event) => completeSelectedTask(event) } />

            <ContentWrapper>
                <TaskInput
                    type = 'text'
                    label = 'Задачи'
                    placeholder = 'Пройти интенсив по React + Redux + TS + Mobx'
                    register = { register('title') } />

                <Datepicker control = { control } />

                <TaskTextarea
                    label = 'Описание'
                    placeholder = 'После изучения всех технологий, завершить работу над проектами и найти работу.'
                    register = { register('description') } />

                <Tags handleTagClick = { setTagValue } />

                <Errors errors = { errors } />

                <FormControls>
                    <TaskFormButton
                        onClick = { (event) => resetForm(event) }
                        type = 'reset'
                        disabled = { !isDirty }>Reset</TaskFormButton>

                    <TaskFormButton
                        type = 'submit'
                        disabled = { !isDirty }>Save</TaskFormButton>
                </FormControls>
            </ContentWrapper>
        </form>
    );
};
