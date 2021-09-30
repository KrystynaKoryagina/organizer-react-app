import axios from 'axios';

import {
    ITag, ITaskRequest, ITaskResponse, ITasksResponse,
} from '../types';

export const taskApi = Object.freeze({
    async getTags() {
        const { data } = await axios.get<ITag[]>(
            `${process.env.REACT_APP_API_URL}/tags`,
        );

        return data;
    },

    async getTasks() {
        const { data: tasks } = await axios.get<ITasksResponse>(
            `${process.env.REACT_APP_API_URL}/tasks`,
        );

        return tasks.data;
    },

    async updateTask(id: string, task: ITaskRequest) {
        const { data: newTask } = await axios.put<ITaskResponse>(
            `${process.env.REACT_APP_API_URL}/tasks/${id}`,
            task,
        );

        return newTask.data;
    },

    async createTask(task: ITaskRequest) {
        const { data: newTask } = await axios.post<ITaskResponse>(
            `${process.env.REACT_APP_API_URL}/tasks`,
            task,
        );

        return newTask.data;
    },

    async deleteTask(id: string) {
        const { data } = await axios.delete<void>(
            `${process.env.REACT_APP_API_URL}/tasks/${id}`,
        );

        return data;
    },
});
